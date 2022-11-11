const num_of_articles = 6
const pagination = 5
const pages = Math.ceil(num_of_articles/pagination)
var current_page = 0

const showArticles = function() {
	$("#articles").empty()
	for (let i = 1; i <= pagination; i++){
		$.get("articles/" + ((pagination * current_page) + i) + ".md", function(data, status){
			if (status === "success") {
				var article = $("<div></div>").addClass("articles").attr("id", i); 

				var converter = new showdown.Converter(),
				    text      = data,
				    html      = converter.makeHtml(text);

				article.append(html)
				$("#articles").append(article)
			}
	})}
	addPagination()	
	}

const addPagination = function() {
	var page_selector = $("<div></div>").addClass("pagination");

	for (let i = 1; i <= pages; i++){
		page_selector.append("<a href=\"#\">" + i + "</a>")
	}
	$(".center").empty()
	$(".center").append(page_selector)
	
	$(".pagination").click(function(d){
		current_page = d.target.text - 1
		showArticles()
	})
}

showArticles()


