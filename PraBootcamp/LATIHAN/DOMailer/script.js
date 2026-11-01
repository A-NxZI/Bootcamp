//DATA ARRAY
const initialEmails = [
{ id: "1", sender: "HR TechCorp", subject: "URGENT: Submit Q4 Performance Assessment", body: "Please complete your quarterly review before 5 PM today to avoid delay in processing.", date: "08:15 AM", isRead: false, isStarred: true },
{ id: "2", sender: "Alex Dev", subject: "Code Review - PR #402 DOM Refactoring", body: "Hey, can you take a look at the event delegation implementation when you have time?", date: "08:42 AM", isRead: false, isStarred: false },
{ id: "3", sender: "GitHub Notifications", subject: "[IMPORTANT] Security alert on repository main branch", body: "We detected a potential dependency vulnerability in package.json. Please update immediately.", date: "09:05 AM", isRead: false, isStarred: true },
{ id: "4", sender: "Sarah Product Lead", subject: "Sprint Planning Alignment for Next Week", body: "Let's align our backlog items for DOMailer milestone 2 tomorrow at 10 AM.", date: "09:30 AM", isRead: true, isStarred: false },
{ id: "5", sender: "Figma Team", subject: "New comments on DOMailer UI Wireframes", body: "Sarah left 3 new comments on the table view layout component.", date: "10:00 AM", isRead: true, isStarred: false },
{ id: "6", sender: "DevOps Ops", subject: "Staging Server Maintenance Notice", body: "Staging environment will be down for scheduled upgrades tonight between 11 PM and 1 AM.", date: "10:15 AM", isRead: true, isStarred: false },
{ id: "7", sender: "Client Support", subject: "URGENT: Login issue reported on production", body: "Multiple users are reporting intermittent 500 errors when submitting the login form.", date: "10:45 AM", isRead: false, isStarred: true },
{ id: "8", sender: "Slack Workspace", subject: "Weekly Activity Digest for TechCorp", body: "Here is your weekly summary: 142 new messages across 8 active channels.", date: "11:20 AM", isRead: true, isStarred: false },
{ id: "9", sender: "Finance Department", subject: "Reimbursement Claim Approved", body: "Your internet allowance claim for last month has been processed and approved.", date: "11:50 AM", isRead: true, isStarred: true },
{ id: "10", sender: "Radian QA", subject: "Bug Report: Checkbox bulk selection bug", body: "When select all is checked, unchecking one row does not update the master checkbox state.", date: "12:10 PM", isRead: false, isStarred: false },
{ id: "11", sender: "Google Calendar", subject: "Reminder: All-Hands Meeting in 30 minutes", body: "Company updates and Q&A session with the executive team. Zoom link attached.", date: "01:30 PM", isRead: false, isStarred: false },
{ id: "12", sender: "Jessica TechCorp", subject: "Design System Guidelines v2.0", body: "Check out the updated color tokens and button states for DOMailer dark mode.", date: "02:00 PM", isRead: true, isStarred: false },
{ id: "13", sender: "Vercel Deployments", subject: "Deployment successful for domailer-staging", body: "Your commit 'fix: update event listener logic' was successfully deployed to production preview.", date: "02:25 PM", isRead: true, isStarred: false },
{ id: "14", sender: "IT Helpdesk", subject: "IMPORTANT: Password Reset Required", body: "Your corporate account password will expire in 3 days. Please update it via portal.", date: "03:10 PM", isRead: false, isStarred: true },
{ id: "15", sender: "Medium Daily", subject: "Top stories in JavaScript Performance & DOM Optimization", body: "Discover why event delegation improves memory management in heavy web applications.", date: "Yesterday", isRead: true, isStarred: false },
{ id: "16", sender: "Michael Lead Dev", subject: "Architecture Review Feedback", body: "Great job on keeping the code modular. Let's optimize the filter algorithm next.", date: "Yesterday", isRead: true, isStarred: true },
{ id: "17", sender: "Notion Updates", subject: "Page shared with you: DOMailer Documentation", body: "Michael shared 'DOMailer Component Lifecycle' page with your workspace.", date: "Yesterday", isRead: true, isStarred: false },
{ id: "18", sender: "HR TechCorp", subject: "Town Hall Feedback Survey", body: "We value your input! Take 2 minutes to fill out the anonymous feedback form.", date: "Yesterday", isRead: true, isStarred: false },
{ id: "19", sender: "LinkedIn Jobs", subject: "New Frontend Developer roles matching your profile", body: "Explore 5 new remote opportunities matching Senior Vanilla JavaScript Developer.", date: "2 days ago", isRead: true, isStarred: false },
{ id: "20", sender: "NPM Registry", subject: "[URGENT] Deprecation notice for package user-event", body: "Version 12.x of user-event is now deprecated. Please upgrade to version 14.x immediately.", date: "2 days ago", isRead: false, isStarred: false },
{ id: "21", sender: "David Frontend", subject: "Question about DOM traversal methods", body: "Should we prefer closest() over parentElement for nested table rows in DOMailer?", date: "2 days ago", isRead: true, isStarred: false },
{ id: "22", sender: "Spotify for Work", subject: "Your Weekly Focused Coding Playlist", body: "Deep focus beats curated for frontend engineering sessions.", date: "3 days ago", isRead: true, isStarred: false },
{ id: "23", sender: "AWS Billing", subject: "Monthly Invoice Available for Account #8902", body: "Your monthly usage statement for September is available for download.", date: "3 days ago", isRead: true, isStarred: false },
{ id: "24", sender: "TechCorp Security", subject: "IMPORTANT: 2FA Enrollment Notice", body: "Two-Factor Authentication will be enforced for all developer accounts starting Friday.", date: "4 days ago", isRead: false, isStarred: true },
{ id: "25", sender: "Postman Team", subject: "Collection DOMailer API Mock shared", body: "Alex updated the response schemas for GET /emails and POST /emails/compose.", date: "4 days ago", isRead: true, isStarred: false },
{ id: "26", sender: "Coursera Tech", subject: "Certificate earned: Advanced JavaScript Data Structures", body: "Congratulations! Your certificate is ready to be shared on your LinkedIn profile.", date: "5 days ago", isRead: true, isStarred: true },
{ id: "27", sender: "Dribbble Digest", subject: "Minimalist Dashboard Design Inspiration", body: "Top 10 clean table and inbox UI designs selected by the community this week.", date: "5 days ago", isRead: true, isStarred: false },
{ id: "28", sender: "Office Facilities", subject: "Desk Allocation Update for Q4", body: "Please review your new seat assignment for the Engineering floor in Building B.", date: "6 days ago", isRead: true, isStarred: false },
{ id: "29", sender: "Sentry Error Tracker", subject: "URGENT: Unhandled TypeException in Production", body: "New exception caught in app.js at line 84: Cannot read properties of null.", date: "Oct 01", isRead: false, isStarred: true },
{ id: "30", sender: "TechCorp Onboarding", subject: "Welcome to TechCorp Engineering Team!", body: "Welcome aboard! Here are all the resources to get your local environment set up.", date: "Sep 28", isRead: true, isStarred: true }
];

//=======
// STATE
//=======
let emails = [...initialEmails];
let currentFilter = "all";
let searchQuery = "";
const selectedIds = new Set();

//HTML element
let a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
let d1 = document.getElementById("d1");

//========
// HELPERS
//========

function visible(){
  return emails.filter((ir) => 
    ir.isRead===false
  
  );
}

// ===|
// A1 |
// ===|

function sum(){
  let a1a = a1.querySelector('.a1a');
  let a1b = a1.querySelector('.a1b');
  let sig = initialEmails.reduce((acc, item) => 
    { if(!item.isRead)acc.a += 1;
      if(item.isStarred)acc.b += 1;
      return acc;
    },
    {a:0, b:0});
    console.log(sig.a)
  a1a.textContent = sig.a;
  a1b.textContent = sig.b;
  renderList()
}
sum()

// ===|
// B1 | SEARCH BAR
// ===|

function search(){
  searchQuery.startsWith
}


// ===|
// D1 |
// ===|

d1.addEventListener('click', function(e){
  const row = e.target.closest('tr[data-id]');
  if (!row)return;

  const id = row.dataset.id;
  const actionEl = e.target.closest('td[data-action]');
  const action = actionEl ? actionEl.dataset.action : null;

  if(action==="delete"){
    emails = emails.filter((m) => m.id !== id);
    selectedIds.delete(id);
  }else if(action==="star"){
    s
  }

  sum();
  renderList();
})


// ============
// RENDER EMAIL
// ============
function renderList(){
  if(emails.length===0){
    d1.innerHTML = "<h5>There's no email  yet</h5>";
    return;
  };

    let rendering = "<table class='table table-bordered'>  <thead><tr><th><input type='checkbox'></th> <th>★</th> <th>sender</th> <th>subject & content</th> <th>date</th> <th>action</th> </tr></thead>"
    for(let i=0 ; i<emails.length ; i++){
        let email = emails[i];
        rendering += `
        <tr data-id="${email.id}">
        <td><input type="checkbox" id=""></td>
        <td><span data-action="star" class="star-btn ${email.isStarred ? "text-warning" : "text-secondary"}" data-action="star">${email.isStarred ? "★" : "☆"}</span></td>
        <td>${email.sender}</td>
        <td><h4>${email.subject}</h4><p>${email.body}</p></td>
        <td>${email.date}</td>
        <td> <button data-action="delete" class="theme-danger btn-solid">delete</button></td>
        </tr>`;
    };

    rendering += "</table>";
    d1.innerHTML=rendering;
    
    renderList()
} 