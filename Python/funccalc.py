def calculate_gap(current, desired):

    if current >= desired:
        print("You have reached your goal.")
    else:
        print("You need to increase your income by", desired - current)


calculate_gap(500000, 500000)
calculate_gap(70000, 500000)
calculate_gap(90000, 500000)