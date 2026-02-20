letter = ''' Dear <|Name|>,
    You are selected!
     <|Date|> '''

print(letter.replace("<|Name|>", "Kuldeep").replace("<|Date|>", "24th august 2003"))