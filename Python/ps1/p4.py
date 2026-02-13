import os

# specify the directory you want to list
directory_path = "/"

try:
    # use os.listdir() to get a list of entries in the directory
    contents = os.listdir(directory_path)

    # print each item
    print(f"Contents of directory '{directory_path}':")
    for item in contents:
        print(item)
except FileNotFoundError:
    print(f"The directory '{directory_path}' does not exist.")
except PermissionError:
    print(f"Permission denied accessing '{directory_path}'.")
