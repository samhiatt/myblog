---
title: Jupyter Notebook Output
layout: jupyter_output
---
## A random example playing with Redis API
```python
import redis, json
```


```python
r = redis.Redis.from_url('...')
```


```python
r.set('foo','fooz123',ex=1)
```




    True




```python
r.get('foo')
```




    b'fooz123'




```python
import time
time.sleep(1)
r.get('foo')
```


```python
r.geoadd('foo',-123.0, 37.37, "Somewhere in California")
```




    1




```python
r.geoadd('foo',-120.0, 37.0, "Somewhere else in California")
```




    1




```python
r.geopos('foo','Somewhere else in California')
```




    [(-120.00000089406967, 37.00000026605964)]




```python
r.geohash('foo',"Somewhere else in California")
```




    ['9qddmrdst70']




```python
r.geodist('foo','Somewhere in California','Somewhere else in California',
          unit='km' )
```




    268.9922




```python
r.georadius('foo', -120, 37, 300, unit='km', withcoord=1, withdist=1, )
```




    [[b'Somewhere else in California',
      0.0001,
      (-120.00000089406967, 37.00000026605964)],
     [b'Somewhere in California',
      268.9923,
      (-122.99999803304672, 37.37000111785182)]]




```python
from geohash2 import decode, encode, decode_exactly
```


```python
decode_exactly(r.geohash('foo',"Somewhere else in California")[0])
```




    (36.99999578297138,
     -120.00000290572643,
     6.705522537231445e-07,
     6.705522537231445e-07)




```python
decode_exactly('9qddmrdst70')
```




    (36.99999578297138,
     -120.00000290572643,
     6.705522537231445e-07,
     6.705522537231445e-07)




```python
r.keys()
```




    [b'foo']




```python
r.type('foo')
```




    b'zset'




```python
r.set('bar','a string')
```




    True




```python
r.type('bar')
```




    b'string'




```python
r.delete('foo')
```




    1




```python
r.delete('bar')
```




    1




```python
r.keys()
```




    []




```python
import pandas as pd
df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv')

```


```python
r.set('data',json.dumps(df.to_dict('records')))
```




    True




```python
r.get('data')
```




    b'[{"country": "Afghanistan", "pop": 31889923.0, "continent": "Asia", "lifeExp": 43.828, "gdpPercap": 974.5803384}, {"country": "Albania", "pop": 3600523.0, "continent": "Europe", "lifeExp": 76.423, "gdpPercap": 5937.029525999998}, {"country": "Algeria", "pop": 33333216.0, "continent": "Africa", "lifeExp": 72.301, "gdpPercap": 6223.367465}, {"country": "Angola", "pop": 12420476.0, "continent": "Africa", "lifeExp": 42.731, "gdpPercap": 4797.231267}, {"country": "Argentina", "pop": 40301927.0, "continent": "Americas", "lifeExp": 75.32, "gdpPercap": 12779.37964}, {"country": "Australia", "pop": 20434176.0, "continent": "Oceania", "lifeExp": 81.235, "gdpPercap": 34435.367439999995}, {"country": "Austria", "pop": 8199783.0, "continent": "Europe", "lifeExp": 79.829, "gdpPercap": 36126.4927}, {"country": "Bahrain", "pop": 708573.0, "continent": "Asia", "lifeExp": 75.635, "gdpPercap": 29796.04834}, {"country": "Bangladesh", "pop": 150448339.0, "continent": "Asia", "lifeExp": 64.062, "gdpPercap": 1391.253792}, {"country": "Belgium", "pop": 10392226.0, "continent": "Europe", "lifeExp": 79.441, "gdpPercap": 33692.60508}, {"country": "Benin", "pop": 8078314.0, "continent": "Africa", "lifeExp": 56.728, "gdpPercap": 1441.284873}, {"country": "Bolivia", "pop": 9119152.0, "continent": "Americas", "lifeExp": 65.554, "gdpPercap": 3822.137084}, {"country": "Bosnia and Herzegovina", "pop": 4552198.0, "continent": "Europe", "lifeExp": 74.852, "gdpPercap": 7446.298803}, {"country": "Botswana", "pop": 1639131.0, "continent": "Africa", "lifeExp": 50.728, "gdpPercap": 12569.85177}, {"country": "Brazil", "pop": 190010647.0, "continent": "Americas", "lifeExp": 72.39, "gdpPercap": 9065.800825}, {"country": "Bulgaria", "pop": 7322858.0, "continent": "Europe", "lifeExp": 73.005, "gdpPercap": 10680.79282}, {"country": "Burkina Faso", "pop": 14326203.0, "continent": "Africa", "lifeExp": 52.295, "gdpPercap": 1217.032994}, {"country": "Burundi", "pop": 8390505.0, "continent": "Africa", "lifeExp": 49.58, "gdpPercap": 430.0706916}, {"country": "Cambodia", "pop": 14131858.0, "continent": "Asia", "lifeExp": 59.723, "gdpPercap": 1713.778686}, {"country": "Cameroon", "pop": 17696293.0, "continent": "Africa", "lifeExp": 50.43, "gdpPercap": 2042.09524}, {"country": "Canada", "pop": 33390141.0, "continent": "Americas", "lifeExp": 80.653, "gdpPercap": 36319.23501}, {"country": "Central African Republic", "pop": 4369038.0, "continent": "Africa", "lifeExp": 44.74100000000001, "gdpPercap": 706.016537}, {"country": "Chad", "pop": 10238807.0, "continent": "Africa", "lifeExp": 50.651, "gdpPercap": 1704.063724}, {"country": "Chile", "pop": 16284741.0, "continent": "Americas", "lifeExp": 78.553, "gdpPercap": 13171.63885}, {"country": "China", "pop": 1318683096.0, "continent": "Asia", "lifeExp": 72.961, "gdpPercap": 4959.114854}, {"country": "Colombia", "pop": 44227550.0, "continent": "Americas", "lifeExp": 72.889, "gdpPercap": 7006.580419}, {"country": "Comoros", "pop": 710960.0, "continent": "Africa", "lifeExp": 65.152, "gdpPercap": 986.1478792}, {"country": "Congo, Dem. Rep.", "pop": 64606759.0, "continent": "Africa", "lifeExp": 46.462, "gdpPercap": 277.5518587}, {"country": "Congo, Rep.", "pop": 3800610.0, "continent": "Africa", "lifeExp": 55.322, "gdpPercap": 3632.557798}, {"country": "Costa Rica", "pop": 4133884.0, "continent": "Americas", "lifeExp": 78.782, "gdpPercap": 9645.06142}, {"country": "Cote d\'Ivoire", "pop": 18013409.0, "continent": "Africa", "lifeExp": 48.328, "gdpPercap": 1544.750112}, {"country": "Croatia", "pop": 4493312.0, "continent": "Europe", "lifeExp": 75.748, "gdpPercap": 14619.222719999998}, {"country": "Cuba", "pop": 11416987.0, "continent": "Americas", "lifeExp": 78.273, "gdpPercap": 8948.102923}, {"country": "Czech Republic", "pop": 10228744.0, "continent": "Europe", "lifeExp": 76.486, "gdpPercap": 22833.30851}, {"country": "Denmark", "pop": 5468120.0, "continent": "Europe", "lifeExp": 78.332, "gdpPercap": 35278.41874}, {"country": "Djibouti", "pop": 496374.0, "continent": "Africa", "lifeExp": 54.791, "gdpPercap": 2082.4815670000007}, {"country": "Dominican Republic", "pop": 9319622.0, "continent": "Americas", "lifeExp": 72.235, "gdpPercap": 6025.3747520000015}, {"country": "Ecuador", "pop": 13755680.0, "continent": "Americas", "lifeExp": 74.994, "gdpPercap": 6873.262326000001}, {"country": "Egypt", "pop": 80264543.0, "continent": "Africa", "lifeExp": 71.33800000000002, "gdpPercap": 5581.180998}, {"country": "El Salvador", "pop": 6939688.0, "continent": "Americas", "lifeExp": 71.878, "gdpPercap": 5728.353514}, {"country": "Equatorial Guinea", "pop": 551201.0, "continent": "Africa", "lifeExp": 51.57899999999999, "gdpPercap": 12154.08975}, {"country": "Eritrea", "pop": 4906585.0, "continent": "Africa", "lifeExp": 58.04, "gdpPercap": 641.3695236000002}, {"country": "Ethiopia", "pop": 76511887.0, "continent": "Africa", "lifeExp": 52.947, "gdpPercap": 690.8055759}, {"country": "Finland", "pop": 5238460.0, "continent": "Europe", "lifeExp": 79.313, "gdpPercap": 33207.0844}, {"country": "France", "pop": 61083916.0, "continent": "Europe", "lifeExp": 80.657, "gdpPercap": 30470.0167}, {"country": "Gabon", "pop": 1454867.0, "continent": "Africa", "lifeExp": 56.735, "gdpPercap": 13206.48452}, {"country": "Gambia", "pop": 1688359.0, "continent": "Africa", "lifeExp": 59.448, "gdpPercap": 752.7497265}, {"country": "Germany", "pop": 82400996.0, "continent": "Europe", "lifeExp": 79.406, "gdpPercap": 32170.37442}, {"country": "Ghana", "pop": 22873338.0, "continent": "Africa", "lifeExp": 60.022, "gdpPercap": 1327.60891}, {"country": "Greece", "pop": 10706290.0, "continent": "Europe", "lifeExp": 79.483, "gdpPercap": 27538.41188}, {"country": "Guatemala", "pop": 12572928.0, "continent": "Americas", "lifeExp": 70.259, "gdpPercap": 5186.050003}, {"country": "Guinea", "pop": 9947814.0, "continent": "Africa", "lifeExp": 56.007, "gdpPercap": 942.6542111}, {"country": "Guinea-Bissau", "pop": 1472041.0, "continent": "Africa", "lifeExp": 46.38800000000001, "gdpPercap": 579.2317429999998}, {"country": "Haiti", "pop": 8502814.0, "continent": "Americas", "lifeExp": 60.916, "gdpPercap": 1201.637154}, {"country": "Honduras", "pop": 7483763.0, "continent": "Americas", "lifeExp": 70.19800000000001, "gdpPercap": 3548.3308460000007}, {"country": "Hong Kong, China", "pop": 6980412.0, "continent": "Asia", "lifeExp": 82.208, "gdpPercap": 39724.97867}, {"country": "Hungary", "pop": 9956108.0, "continent": "Europe", "lifeExp": 73.33800000000002, "gdpPercap": 18008.94444}, {"country": "Iceland", "pop": 301931.0, "continent": "Europe", "lifeExp": 81.757, "gdpPercap": 36180.78919}, {"country": "India", "pop": 1110396331.0, "continent": "Asia", "lifeExp": 64.69800000000001, "gdpPercap": 2452.210407}, {"country": "Indonesia", "pop": 223547000.0, "continent": "Asia", "lifeExp": 70.65, "gdpPercap": 3540.651564}, {"country": "Iran", "pop": 69453570.0, "continent": "Asia", "lifeExp": 70.964, "gdpPercap": 11605.71449}, {"country": "Iraq", "pop": 27499638.0, "continent": "Asia", "lifeExp": 59.545, "gdpPercap": 4471.061906}, {"country": "Ireland", "pop": 4109086.0, "continent": "Europe", "lifeExp": 78.885, "gdpPercap": 40675.99635}, {"country": "Israel", "pop": 6426679.0, "continent": "Asia", "lifeExp": 80.745, "gdpPercap": 25523.2771}, {"country": "Italy", "pop": 58147733.0, "continent": "Europe", "lifeExp": 80.546, "gdpPercap": 28569.7197}, {"country": "Jamaica", "pop": 2780132.0, "continent": "Americas", "lifeExp": 72.567, "gdpPercap": 7320.8802620000015}, {"country": "Japan", "pop": 127467972.0, "continent": "Asia", "lifeExp": 82.603, "gdpPercap": 31656.06806}, {"country": "Jordan", "pop": 6053193.0, "continent": "Asia", "lifeExp": 72.535, "gdpPercap": 4519.461171}, {"country": "Kenya", "pop": 35610177.0, "continent": "Africa", "lifeExp": 54.11, "gdpPercap": 1463.249282}, {"country": "Korea, Dem. Rep.", "pop": 23301725.0, "continent": "Asia", "lifeExp": 67.297, "gdpPercap": 1593.06548}, {"country": "Korea, Rep.", "pop": 49044790.0, "continent": "Asia", "lifeExp": 78.623, "gdpPercap": 23348.139730000006}, {"country": "Kuwait", "pop": 2505559.0, "continent": "Asia", "lifeExp": 77.58800000000002, "gdpPercap": 47306.98978}, {"country": "Lebanon", "pop": 3921278.0, "continent": "Asia", "lifeExp": 71.993, "gdpPercap": 10461.05868}, {"country": "Lesotho", "pop": 2012649.0, "continent": "Africa", "lifeExp": 42.592, "gdpPercap": 1569.331442}, {"country": "Liberia", "pop": 3193942.0, "continent": "Africa", "lifeExp": 45.678, "gdpPercap": 414.5073415}, {"country": "Libya", "pop": 6036914.0, "continent": "Africa", "lifeExp": 73.952, "gdpPercap": 12057.49928}, {"country": "Madagascar", "pop": 19167654.0, "continent": "Africa", "lifeExp": 59.44300000000001, "gdpPercap": 1044.770126}, {"country": "Malawi", "pop": 13327079.0, "continent": "Africa", "lifeExp": 48.303, "gdpPercap": 759.3499101}, {"country": "Malaysia", "pop": 24821286.0, "continent": "Asia", "lifeExp": 74.241, "gdpPercap": 12451.6558}, {"country": "Mali", "pop": 12031795.0, "continent": "Africa", "lifeExp": 54.467, "gdpPercap": 1042.581557}, {"country": "Mauritania", "pop": 3270065.0, "continent": "Africa", "lifeExp": 64.164, "gdpPercap": 1803.151496}, {"country": "Mauritius", "pop": 1250882.0, "continent": "Africa", "lifeExp": 72.801, "gdpPercap": 10956.99112}, {"country": "Mexico", "pop": 108700891.0, "continent": "Americas", "lifeExp": 76.195, "gdpPercap": 11977.57496}, {"country": "Mongolia", "pop": 2874127.0, "continent": "Asia", "lifeExp": 66.803, "gdpPercap": 3095.7722710000007}, {"country": "Montenegro", "pop": 684736.0, "continent": "Europe", "lifeExp": 74.543, "gdpPercap": 9253.896111}, {"country": "Morocco", "pop": 33757175.0, "continent": "Africa", "lifeExp": 71.164, "gdpPercap": 3820.17523}, {"country": "Mozambique", "pop": 19951656.0, "continent": "Africa", "lifeExp": 42.082, "gdpPercap": 823.6856205}, {"country": "Myanmar", "pop": 47761980.0, "continent": "Asia", "lifeExp": 62.069, "gdpPercap": 944.0}, {"country": "Namibia", "pop": 2055080.0, "continent": "Africa", "lifeExp": 52.90600000000001, "gdpPercap": 4811.060429}, {"country": "Nepal", "pop": 28901790.0, "continent": "Asia", "lifeExp": 63.785, "gdpPercap": 1091.359778}, {"country": "Netherlands", "pop": 16570613.0, "continent": "Europe", "lifeExp": 79.762, "gdpPercap": 36797.93332}, {"country": "New Zealand", "pop": 4115771.0, "continent": "Oceania", "lifeExp": 80.204, "gdpPercap": 25185.00911}, {"country": "Nicaragua", "pop": 5675356.0, "continent": "Americas", "lifeExp": 72.899, "gdpPercap": 2749.320965}, {"country": "Niger", "pop": 12894865.0, "continent": "Africa", "lifeExp": 56.867, "gdpPercap": 619.6768923999998}, {"country": "Nigeria", "pop": 135031164.0, "continent": "Africa", "lifeExp": 46.859, "gdpPercap": 2013.977305}, {"country": "Norway", "pop": 4627926.0, "continent": "Europe", "lifeExp": 80.196, "gdpPercap": 49357.19017}, {"country": "Oman", "pop": 3204897.0, "continent": "Asia", "lifeExp": 75.64, "gdpPercap": 22316.19287}, {"country": "Pakistan", "pop": 169270617.0, "continent": "Asia", "lifeExp": 65.483, "gdpPercap": 2605.94758}, {"country": "Panama", "pop": 3242173.0, "continent": "Americas", "lifeExp": 75.53699999999998, "gdpPercap": 9809.185636}, {"country": "Paraguay", "pop": 6667147.0, "continent": "Americas", "lifeExp": 71.752, "gdpPercap": 4172.838464}, {"country": "Peru", "pop": 28674757.0, "continent": "Americas", "lifeExp": 71.421, "gdpPercap": 7408.905561}, {"country": "Philippines", "pop": 91077287.0, "continent": "Asia", "lifeExp": 71.688, "gdpPercap": 3190.481016}, {"country": "Poland", "pop": 38518241.0, "continent": "Europe", "lifeExp": 75.563, "gdpPercap": 15389.924680000002}, {"country": "Portugal", "pop": 10642836.0, "continent": "Europe", "lifeExp": 78.098, "gdpPercap": 20509.64777}, {"country": "Puerto Rico", "pop": 3942491.0, "continent": "Americas", "lifeExp": 78.74600000000002, "gdpPercap": 19328.70901}, {"country": "Reunion", "pop": 798094.0, "continent": "Africa", "lifeExp": 76.442, "gdpPercap": 7670.122558}, {"country": "Romania", "pop": 22276056.0, "continent": "Europe", "lifeExp": 72.476, "gdpPercap": 10808.47561}, {"country": "Rwanda", "pop": 8860588.0, "continent": "Africa", "lifeExp": 46.242, "gdpPercap": 863.0884639000002}, {"country": "Sao Tome and Principe", "pop": 199579.0, "continent": "Africa", "lifeExp": 65.528, "gdpPercap": 1598.435089}, {"country": "Saudi Arabia", "pop": 27601038.0, "continent": "Asia", "lifeExp": 72.777, "gdpPercap": 21654.83194}, {"country": "Senegal", "pop": 12267493.0, "continent": "Africa", "lifeExp": 63.062, "gdpPercap": 1712.472136}, {"country": "Serbia", "pop": 10150265.0, "continent": "Europe", "lifeExp": 74.002, "gdpPercap": 9786.534714}, {"country": "Sierra Leone", "pop": 6144562.0, "continent": "Africa", "lifeExp": 42.56800000000001, "gdpPercap": 862.5407561000002}, {"country": "Singapore", "pop": 4553009.0, "continent": "Asia", "lifeExp": 79.972, "gdpPercap": 47143.17964}, {"country": "Slovak Republic", "pop": 5447502.0, "continent": "Europe", "lifeExp": 74.663, "gdpPercap": 18678.31435}, {"country": "Slovenia", "pop": 2009245.0, "continent": "Europe", "lifeExp": 77.926, "gdpPercap": 25768.25759}, {"country": "Somalia", "pop": 9118773.0, "continent": "Africa", "lifeExp": 48.159, "gdpPercap": 926.1410683}, {"country": "South Africa", "pop": 43997828.0, "continent": "Africa", "lifeExp": 49.339, "gdpPercap": 9269.657808}, {"country": "Spain", "pop": 40448191.0, "continent": "Europe", "lifeExp": 80.941, "gdpPercap": 28821.0637}, {"country": "Sri Lanka", "pop": 20378239.0, "continent": "Asia", "lifeExp": 72.396, "gdpPercap": 3970.095407}, {"country": "Sudan", "pop": 42292929.0, "continent": "Africa", "lifeExp": 58.556, "gdpPercap": 2602.394995}, {"country": "Swaziland", "pop": 1133066.0, "continent": "Africa", "lifeExp": 39.613, "gdpPercap": 4513.480643}, {"country": "Sweden", "pop": 9031088.0, "continent": "Europe", "lifeExp": 80.884, "gdpPercap": 33859.74835}, {"country": "Switzerland", "pop": 7554661.0, "continent": "Europe", "lifeExp": 81.70100000000002, "gdpPercap": 37506.41907}, {"country": "Syria", "pop": 19314747.0, "continent": "Asia", "lifeExp": 74.143, "gdpPercap": 4184.548089}, {"country": "Taiwan", "pop": 23174294.0, "continent": "Asia", "lifeExp": 78.4, "gdpPercap": 28718.27684}, {"country": "Tanzania", "pop": 38139640.0, "continent": "Africa", "lifeExp": 52.517, "gdpPercap": 1107.482182}, {"country": "Thailand", "pop": 65068149.0, "continent": "Asia", "lifeExp": 70.616, "gdpPercap": 7458.396326999998}, {"country": "Togo", "pop": 5701579.0, "continent": "Africa", "lifeExp": 58.42, "gdpPercap": 882.9699437999999}, {"country": "Trinidad and Tobago", "pop": 1056608.0, "continent": "Americas", "lifeExp": 69.819, "gdpPercap": 18008.50924}, {"country": "Tunisia", "pop": 10276158.0, "continent": "Africa", "lifeExp": 73.923, "gdpPercap": 7092.923025}, {"country": "Turkey", "pop": 71158647.0, "continent": "Europe", "lifeExp": 71.777, "gdpPercap": 8458.276384}, {"country": "Uganda", "pop": 29170398.0, "continent": "Africa", "lifeExp": 51.542, "gdpPercap": 1056.380121}, {"country": "United Kingdom", "pop": 60776238.0, "continent": "Europe", "lifeExp": 79.425, "gdpPercap": 33203.26128}, {"country": "United States", "pop": 301139947.0, "continent": "Americas", "lifeExp": 78.242, "gdpPercap": 42951.65309}, {"country": "Uruguay", "pop": 3447496.0, "continent": "Americas", "lifeExp": 76.384, "gdpPercap": 10611.46299}, {"country": "Venezuela", "pop": 26084662.0, "continent": "Americas", "lifeExp": 73.747, "gdpPercap": 11415.80569}, {"country": "Vietnam", "pop": 85262356.0, "continent": "Asia", "lifeExp": 74.249, "gdpPercap": 2441.576404}, {"country": "West Bank and Gaza", "pop": 4018332.0, "continent": "Asia", "lifeExp": 73.422, "gdpPercap": 3025.349798}, {"country": "Yemen, Rep.", "pop": 22211743.0, "continent": "Asia", "lifeExp": 62.698, "gdpPercap": 2280.769906}, {"country": "Zambia", "pop": 11746035.0, "continent": "Africa", "lifeExp": 42.38399999999999, "gdpPercap": 1271.211593}, {"country": "Zimbabwe", "pop": 12311143.0, "continent": "Africa", "lifeExp": 43.487, "gdpPercap": 469.70929810000007}]'




```python
df = pd.DataFrame(json.loads(r.get('data')))
df.iloc[0]
```




    country      Afghanistan
    pop              1234555
    continent           Asia
    lifeExp           43.828
    gdpPercap         974.58
    Name: 0, dtype: object



## Markdown

And now here is a bunch of `markdown`.  

I can include code snippets:

``` python
def hello():
    print("hey")
```

And block quotes:
>    This is a really interesting quote.  
    There are multiple lines.  
>>        Nested quote

Cool, huh?

### Another H3 With A Really Long Title That Should Wrap

## Another H2

# An H1

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

# And an H2

#### An H4

## Closing Remarks
And in conclusion...

