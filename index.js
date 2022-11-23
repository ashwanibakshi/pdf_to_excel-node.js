const express =  require("express");
const path    =  require("path");
const pdf2excel = require('pdf-to-excel');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',async(req,res)=>{
    try {
        await pdf2excel.genXlsx('public/sample.pdf', 'bar.xlsx');
        res.send('working');
        res.end();
      } catch (err) {
        console.error(err);
      }
})

app.listen(3000,()=>console.log('server run at port 3000'));