

function get_website_repos(website_url){

  return 0;

}

function menu_constructor_stage_2(meid, mename){

  /*
    build some interface for display and edit ( choose pdf for menu entry or delete entry )
    add an add button to interface in index.html
    and its function here

    add a commit button ( called nicely "update" ) to index.html
    and its function here

    commit will require it login

    delete of entry will require second confirmation

  */

  var wrapper_li = document.createElement("li");
  var display_ul = document.createElement("ul");
  var button_li = document.createElement("li");
  var button_ul = document.createElement("ul");

  var title_wrap = document.createElement("li");
  var edit_wrap = document.createElement("li");
  var remove_wrap = document.createElement("li");

  var title_h = document.createElement("h3");
  var edit_b = document.createElement("span");
  var remove_b = document.createElement("span");

  /* setting up the elements */
  wrapper_li.setAttribute("id", meid);
  wrapper_li.setAttribute("class", "mlistli");
  edit_b.setAttribute("class","glyphicon glyphicon-pencil");
  remove_b.setAttribute("class","glyphicon glyphicon-remove");
  title_wrap.setAttribute("class","letitle");
  edit_wrap.setAttribute("class","lebutton editbutton");
  remove_wrap.setAttribute("class","lebutton removebutton");
  edit_wrap.setAttribute("id", meid);
  remove_wrap.setAttribute("id", meid);
  button_li.setAttribute("class","bli");

  title_h.innerHTML= mename;

  /* putting together */

  wrapper_li.appendChild(display_ul);
  button_li.appendChild(button_ul);
  title_wrap.appendChild(title_h);
  edit_wrap.appendChild(edit_b);
  remove_wrap.appendChild(remove_b);
  display_ul.appendChild(title_wrap);
  display_ul.appendChild(button_li);
  button_ul.appendChild(edit_wrap);
  button_ul.appendChild(remove_wrap);
  $("#pdf_list_ul").append(wrapper_li);

  return 0;

}

function menu_constructor_stage_1(xml_file_path){

  $.ajax({
  type: "GET",
  url: xml_file_path,
  dataType: "xml",
  success: function(xml) {
      $(xml).find('entry').each(function(){
          var mename = $(this).find('mename').text();
          var meid = $(this).find('meid').text();
          var pdf_path = $(this).find('pdf_path').text();
          menu_constructor_stage_2(meid, mename);
      });
  }
});

return 0;
}

$(document).ready(function (){

  //get_website_repos("https://github.com/tihangratiela/tihangratiela.github.io");

  menu_constructor_stage_1("repos_dropchest/tihangratiela.github.io/content/pages/dynamic/dpages.xml");


});
