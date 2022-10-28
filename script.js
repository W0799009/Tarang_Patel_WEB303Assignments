/*
    Assignment 05
*/

$(document).ready(function () {
   
    class ContentItem{
       employeeId;
        name;
       role;
       genre;
   
   constructor(employeeId, name, role, genre){
           this.employeeId = employeeId;
           this.name = name;
           this.role = role;
           this.genre = genre;
           }
   
   updateContentItem(employeeId, name, role, genre){
           if(this.employeeId == employeeId && name && role && genre){
               this.employeeId = employeeId;
               this.name = name;
               this.role = role;
               this.genre = genre;
               }
   
           }
           toString(){
           return $('#content-item-list').append(`<div class="content-item-wrapper">
           <div id="content-item-${this.employeeId}">
           <h2 class="name">${this.name}</h2>
           <p class="role">${this.role}</p>
           <div class="genre">${this.genre}</div>
           </div>
            </div>`);
               }
       }
    
       let content = [
        {
            "employeeId": 0,
            "name": "Tarang Patel",
            "role": "The prime role of the Head of the Department is to provide strong academic leadership.",
            "genre": "HOD"
        },
        {
            "employeeId": 1,
            "name": "Tanvi Patel",
            "role": "Their main duties include hiring and training employees, creating and implementing business strategies and delegating tasks to team members.",
            "genre": "Manager"
        },
        {
            "employeeId": 2,
            "name": "Poonam Patel",
            "role": "Project managers plan and designate project resources, prepare budgets, monitor progress, and keep stakeholders informed the entire way.",
            "genre": "Project Manager"
        },
         {
            "employeeId": 3,
            "name": "Puja Golani",
            "role": "Employee who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
            "genre": "Employee"
        },
        {
            "employeeId": 4,
            "name": "Rajvir Chalthanwala",
            "role": "Use the appropriate colors and layouts for each graphic. Work with copywriters and creative director to produce final design.",
            "genre": "Designer"
        }
    
        ];
        
        $.each(content, function(key, val){
            $('#content-item-list').append(`<div class="content-item-wrapper">
              <div id="content-item-${this.employeeId}">
              <h2 class="name">${this.name}</h2>
              <p class="role">${this.role}</p>
              <div class="genre">${this.genre}</div>
              </div>
          </div>`);
          });

         $('h1').empty().text("About Stores");

        $('.content-item-wrapper').css('width', '80%');
        $('.content-item-wrapper').css('margin', 'auto'); 
        $('.content-item-wrapper').css('margin-bottom', '10px');
        $('.content-item-wrapper').css('marging-top', '10px');
        $('.content-item-wrapper').css('padding', '10px');
        $('.content-item-wrapper').css('border', 'dotted 3px #edbf12');

        $('.role').css('color', '#aabbcc');
      
      });