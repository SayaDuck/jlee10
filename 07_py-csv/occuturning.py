#Team Summer Jam -- Jonathan Lee, Saqif Abedin, Michelle Thaung
#SoftDev
#K07 -- Stl/O: Divine your Destiny (or, figure out chance)
#2020-09-30

import csv #could also do it with loops but that would be really long. Might also do it later?
import random

occupationsdict = {} #dictionary created!

with open('occupations.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter =',') #reading the csv file
    next(csv_reader) #skip first line, 
    for row in csv_reader: #for each row
        occupationsdict[row[0]] = float(row[1]) #putting the stuff in the dict (name key, percent value). Throws an error without the float() part- defaults to str?

del occupationsdict['Total'] #useless last line

result = random.choices(list(occupationsdict.keys()), weights = occupationsdict.values(), k = 1) #using the values as the weights for probability, and the last line's total percent as the total weight!

#whoops, random.choices() returns a list. Gotta get the 0th index of a 1 item list.
print(result[0] + " (Chance: " + str(occupationsdict.get(result[0])) + "%)") #Also shows the percent chance! Nice!
