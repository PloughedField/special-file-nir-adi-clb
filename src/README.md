# special-file-nir-adi-clb
Performing operations on a file (counting, replacing, etc).

How To Use

   
    Run 

    1. npm i special-file-nir-adi-clb . 


Usage

    Here's a brief intro about what a developer must do in order to start developing the project further:

    const special = require('special-file-nir-adi-clb');


    write_new_file('mynewfile1.txt','Hello nir  and  adi !');
    count_words_in_file('mynewfile1.txt');
    count_lines_in_file('mynewfile1.txt');
    replace_words_in_file('mynewfile1.txt','hello','nir');
    count_common_word('mynewfile1.txt')
    
    
    

API's

|Method|Type|Description|
|---|---|---|
|.write_new_file|string/file|input file name and content (string) and creates a file|   
|.delete_file|string/file|input file name and deleted a file  |   
|.count_words_in_file |int|input file name returen count words in file|   
|.count_lines_in_file|int|input file name returen count lines in file |   
|.replace_words_in_file|string/file|input file name and string returen replace words in file|   
|.count_common_word|dictionary|input file name returen count common word in file|   

