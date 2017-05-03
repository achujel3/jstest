while inotifywait -e close_write JS2.js; 
do 
    node JS2.js; 
done