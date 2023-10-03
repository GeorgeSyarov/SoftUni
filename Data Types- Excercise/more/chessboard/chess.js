function chess(n){
    console.log('<div class="chessboard">');
    for(let i =0; i < n; i++){
        let rows = '';
        let lines = ''
        rows += '  <div>\n';
        for(let j = 0;j < n; j++){
          let sum = i + j;
          let color = sum % 2 ? 'white' : 'black';
           lines += `    <span class="${color}"></span>\n`;
        }
        rows += lines;
        rows += '  </div>';
        console.log(rows);
    } 
    console.log('</div>');
}
chess(3);