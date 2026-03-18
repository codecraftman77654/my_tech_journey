marks ={
    "kuldeep": 100,
    "shubham": 56,
    "akash": 23,
    0: "Mohan"
}

# print(marks.items())
# print(marks.keys())
# print(marks.values())
# marks.update({"Harry":99, "kuldeep":98})
# print(marks)

print(marks.get("Harry2")) # it will print None.
print(marks["Harry2"]) # it will return an error.