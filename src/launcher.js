var fs = require('fs');
module.exports =
   {
     write_new_file,
     delete_file,
     count_words_in_file,
     count_lines_in_file,
     replace_words_in_file,
     count_common_word

     
   }

    
  
function write_new_file(file_name,content) {
    try{
    fs.writeFile(file_name, content+'\n' ,function (err) {
        console.log('Saved successfully!');
    });}
    catch (e) {
      console.log(e);
    }
};

function delete_file(file_name) {
    try{
    fs.unlink(file_name, function (err) {
        console.log('Successfully deleted!');
    });
    }catch (e) {
        console.log(e);
      }
};

function count_words_in_file(file_name) {
    try{
    fs.readFile(file_name, 'utf8', function(err, content_file){ 
        const lines = content_file.match(/\w+/g).length;
        console.log('count_words_in_file:',lines)
        
    }); 
    }catch (e) {
        console.log(e);
    }
    
};

function count_lines_in_file(file_name) {
    try{
    fs.readFile(file_name, 'utf8', function(err, content_file){   
        let count_lines = content_file.split("\n").length
        console.log('count_lines_in_file:',count_lines)
    }); 
    }catch (e) {
        console.log(e);
    } 
    
};


function replace_words_in_file(file_name,word,new_word) {
    try{
    fs.readFile(file_name, 'utf8', function(err, content_file){ 
   
    const lines = content_file.split("\n");
    //console.log(lines)
    var x ;
    var str ;
    for (x of lines) {
        //console.log(x.replace(word,new_word))
        str += x.replace(word,new_word)+'\n'
    }
        
   
    write_new_file(file_name,str.replace(undefined,''))

    }); }
    catch (e) {
        console.log(e);
      }
      
};



function count_common_word(file_name) {
    
    fs.readFile(file_name, 'utf8', function(err, content_file){ 

    let words = content_file.match(/\w+/g);
    // console.log(words); 

    let dict_words = {};

    for (let word of words) {
        if (dict_words[word]) {
            dict_words[word]++;
        } else {
            dict_words[word] = 1;
        }
        
    }
    console.log(dict_words);
}

)};

  
  
  

