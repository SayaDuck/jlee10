#Jason Chan, Benjamin Gallai, Jonathan Lee, Jessica Yeung
#SoftDev
#K05 -- Teamwork, but Better This Time
#2020-09-28

import random
KREWES = { #Dictionary of teamnames; value of each entry is a list of names
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE',
                'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA',
                'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER',
            'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING',
                 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

s = input("orpheus, rex, or endymion: ") #Which team
s = s.lower() #Non-case sensitive

if s != "orpheus" and s != "rex" and s != "endymion": #Not a teamname
    print("That's not one of the three")
else: #For random index within bounds of list, print related value
    print(KREWES[s][random.randint(0, len(KREWES[s]))]) #print(<list><index>)