import React from "react";
import "./App.css";
import $ from "jquery";
import PageContent from "./components/PageContent";
import SideBar from "./components/SideBar";

class App extends React.Component {
  componentDidMount(){
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
    
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }
  render() {
    return (
        <div className="page-wrapper chiller-theme toggled">
          <SideBar />
          <PageContent />
        </div>
    );
  }
}

export default App;
