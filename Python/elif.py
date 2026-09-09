name = input("What is your name ?")
age = int(input("What is your age ?"))
income = int(input("What is your current monthly income ?"))
desired = int(input("What is your desired monthly income ?"))

print("Hello", name)
print ("you are", age, "years old.")
print("your current monthly income is", income)
print("your target monthly income is ", desired)
print("Your journey starts today.")



if income > desired :
    print("Youu are above your target.")

elif income == desired:
  print(" You have reached your target.")

else :
   print("You need to increase your income by", desired - income)