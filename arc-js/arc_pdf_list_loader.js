
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

  menu_constructor_stage_1("repos_dropchest/tihangratiela.github.io/content/pages/dynamic/dpages.xml");


});
