let req = ""
let query = ""
let results = ""
let netID = "isb78870"
let pw = "I$b1204318"

btnSelect.onclick=function(){
  let query = "SELECT * FROM customer"   
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
results = JSON.parse(req.responseText)
lblCustomers.textContent = results




}