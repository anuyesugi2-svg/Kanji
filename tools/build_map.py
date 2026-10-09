"""Simplify the dataofjapan/land GeoJSON into compact SVG paths for the site.
Usage: python3 build_map.py japan.geojson out.json
"""
import json, math, sys

src, out = sys.argv[1], sys.argv[2]
d = json.load(open(src))
LAT0 = math.radians(37)
K = 100  # px per degree (lat)

def proj(lon, lat, oki):
    if oki:  # inset Okinawa closer to Kyushu
        lon -= 2.6
        lat += 5.6
    return (lon * math.cos(LAT0) * K, -lat * K)

def area(r):
    s = 0
    for i in range(len(r)):
        x1, y1 = r[i]; x2, y2 = r[(i + 1) % len(r)]
        s += x1 * y2 - x2 * y1
    return abs(s) / 2

def dp(pts, eps):
    if len(pts) < 3: return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    n = math.hypot(dx, dy) or 1e-9
    md, mi = 0, 0
    for i in range(1, len(pts) - 1):
        dist = abs(dy * pts[i][0] - dx * pts[i][1] + x2 * y1 - y2 * x1) / n
        if dist > md: md, mi = dist, i
    if md > eps:
        return dp(pts[:mi + 1], eps)[:-1] + dp(pts[mi:], eps)
    return [pts[0], pts[-1]]

res = {}
for f in d['features']:
    pid = f['properties']['id']
    oki = pid == 47
    g = f['geometry']
    polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    parts, allpts = [], []
    for poly in polys:
        ring = [proj(x, y, oki) for x, y in poly[0]]
        if area(ring) < (40 if oki else 18): continue
        s = dp(ring[:-1], 0.9)
        if len(s) < 3: continue
        parts.append('M' + 'L'.join(f'{x:.0f} {y:.0f}' for x, y in s) + 'Z')
        allpts += s
    # centroid of largest ring weighted: use bbox centre of biggest part
    big = max((poly[0] for poly in polys), key=lambda r: area([proj(x, y, oki) for x, y in r]))
    bp = [proj(x, y, oki) for x, y in big]
    cx = sum(p[0] for p in bp) / len(bp); cy = sum(p[1] for p in bp) / len(bp)
    res[pid] = {'d': ''.join(parts), 'c': [round(cx), round(cy)]}
xs = [float(v) for r in res.values() for v in r['d'].replace('M', ' ').replace('L', ' ').replace('Z', ' ').split()[0::2]]
ys = [float(v) for r in res.values() for v in r['d'].replace('M', ' ').replace('L', ' ').replace('Z', ' ').split()[1::2]]
meta = {'bbox': [min(xs), min(ys), max(xs), max(ys)], 'paths': res}
json.dump(meta, open(out, 'w'), separators=(',', ':'))
print(meta['bbox'], len(json.dumps(meta)))
