let selectColor = '#548235';
let navbarColor = '#385723';

console.log(getQValue("v"));

/* Very Simply Expand/Collapse Question & Answer */
let coll = document.getElementsByClassName("question");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
/* -------------------------------------------- */

let beginlab = document.getElementById('beginlab');
let prelim = document.getElementById('prelim');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let summary = document.getElementById('summary');

let nb = document.getElementById('nb');
let np = document.getElementById('np');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let ns = document.getElementById('ns');

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function allTransparent() {
  nb.style.backgroundColor = "transparent";
  np.style.backgroundColor = "transparent";
  n1.style.backgroundColor = "transparent";
  n2.style.backgroundColor = "transparent";
  n3.style.backgroundColor = "transparent";
  ns.style.backgroundColor = "transparent";
  setTimeout(scrollToTop, 50); 
}

function allHide() {
  beginlab.style.display = "none";
  prelim.style.display = "none";
  step1.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "none";
  summary.style.display = "none";
}

function moveTo(step){
 switch(step) {
   case 'begin':
    allTransparent();
    allHide();     
    beginlab.style.display = "block";
     nb.style.backgroundColor = selectColor;
     break;
   case 'prelim':
    allTransparent();
    allHide();     
     prelim.style.display = "block";
     np.style.backgroundColor = selectColor;
    break;
   case 's1':
    allTransparent();
    allHide();     
    step1.style.display = "block";
    n1.style.backgroundColor = selectColor;
    break;
   case 's2':
    allTransparent();
    allHide();     
    step2.style.display = "block";
    n2.style.backgroundColor = selectColor;
    break;
   case 's3':
    allTransparent();
    allHide();        
    step3.style.display = "block";
    n3.style.backgroundColor = selectColor;
    break;
   case 'sum':
    allTransparent();
    allHide();        
    summary.style.display = "block";
    ns.style.backgroundColor = selectColor;
    break;
  default:
    console.log('The content requested is not currently available.')
  } 
}





/* ---- Copy to Clipboard - Route Name---- */

/*
document.getElementById('copyToClipboard-routename').addEventListener('click', function() {
  let text = document.getElementById('text-routename');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-routename');
  notif.innerText = "Copied!";
})
*/


/* ---- Copy to Clipboard - Route Name 2---- */

/*
document.getElementById('copyToClipboard-routename2').addEventListener('click', function() {
  let text = document.getElementById('text-routename2');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-routename2');
  notif.innerText = "Copied!";
})
*/

/* ---- Copy to Clipboard - YAML ---- */

/*
document.getElementById('copyToClipboard-yaml').addEventListener('click', function() {
  let text = document.getElementById('text-yaml');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-yaml');
  notif.innerText = "Copied!";
})
*/

/* ---- Copy to Clipboard - CloudHost ---- */

/*
document.getElementById('copyToClipboard-cloudhost').addEventListener('click', function() {
  let text = document.getElementById('text-cloudhost');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-cloudhost');
  notif.innerText = "Copied!";
})
*/

/* ---- Copy to Clipboard - App Connect --- */

/*
document.getElementById('copyToClipboard-appconnect').addEventListener('click', function() {
  let text = document.getElementById('text-appconnect');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-appconnect');
  notif.innerText = "Copied!";
})
*/


/* ---- Options Menu ---- */



function toggleOptions(){
  let menu = document.getElementById('optionsMenu');

  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
};


var highlights = false;


function updates3() {
  let optionTitle3 = document.getElementById("highlightedUpdates3");
  let allUpdates3 = document.getElementsByClassName("UPDATE3");

  if (highlights) { //highlights true
    console.log("currently " + highlights + " | Turning OFF updates...");
    optionTitle3.innerHTML = "[Highlight 3/15/2021 Updates]";
      
    len = allUpdates3 !== null ? allUpdates3.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates3[i].classList.remove("highlighted3");
    }
      highlights = false;
  }

  else {
    console.log("currently " + highlights + " | Turning ON updates...");
    optionTitle3.innerHTML = "[Highlight 3/15/2021 Updates ✅]";

    len = allUpdates3 !== null ? allUpdates3.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates3[i].classList.add("highlighted3");
    }
      highlights = true;
  }
}

/* Keep at Top */

function keepTop() { 
  let menu = document.getElementById('optionsMenu');
  let keepTop = document.getElementById('keepTop');

  if (menu.style.position === "fixed") {
        menu.style.position = "relative";
    keepTop.style.color = "black";
        menu.style.top = "0px";
    keepTop.innerHTML = "[Keep at top]";
  }
  else {
    menu.style.position = "fixed";
    menu.style.top = "50px";
    keepTop.style.color = "green";
    keepTop.innerHTML = "[Keep at top ✅]";
  }

}



/* ---- Preliminary Functions ---- */

let windowExample = document.getElementById("windowExample");

let input = document.getElementById("cloudHostVal");
let confirmText = document.getElementById("confirmTextCloudHost");

let defaultValue = "YourLabName";

/*
let defaultCloudHost = "https://your-Cloud-Host-URL";
let defaultYAML = "http://drone-lab-2-yaml-template-lab-2-admin.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/api-connect-template/yourLabName.yaml";
let defaultAppConnect= "http://drone-lab-2-yaml-template-lab-2-admin.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/app-connect-template/yourLabName.yaml";
*/

let labnames = document.getElementsByClassName("labnameHere");
let defaultConsoleURL = document.getElementsByClassName("defaultConsoleURL");

/*
let allGitLinks = document.getElementsByClassName("LABUSER_GIT_LINK");
let allCloudHost = document.getElementsByClassName("cloudHostHere");
let allYAML = document.getElementsByClassName("yamlURLHere");
let allAppConnect= document.getElementsByClassName("appconnectURLHere");
let allRouteNames = document.getElementsByClassName("routeNameHere");
*/

setLabName();

function setLabName() {
 
  defaultValue = getQValue("v");
  /* default_sg_number = getQValue("sg_number"); */

/*  
  for (var i = 0, len = allGitLinks.length | 0; i < len; i = (i + 1) | 0) {
    allGitLinks[i].href =
      "https://github.ibm.com/GSC-2020-lab-1/" + defaultValue + "-2020-lab";
    allGitLinks[i].textContent =
      "https://github.ibm.com/GSC-2020-lab-1/" + defaultValue + "-2020-lab";
  }
  */

  for (var i = 0, len = labnames.length | 0; i < len; i = (i + 1) | 0) {
    labnames[i].textContent = defaultValue;
  }

  /* ---- Gold Button - Remote Drone Console Unique Deployment ---- */

  // 'http://drew-working-deployment-lab-4-admin.dronelabs-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/'

  
  for (var i = 0, len = defaultConsoleURL.length | 0; i < len; i = (i + 1) | 0) {
    defaultConsoleURL[i].textContent = "http://lab4-dronelab-ui-route-" + defaultValue + "-2021-lab-4.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/";
  }

  document.getElementById('goldbutton').href = 
    "http://lab4-dronelab-ui-route-" + defaultValue + "-2021-lab-4.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/?hlsom=true";
  
  document.getElementById('goldproj').href = 
    "https://console-openshift-console.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/topology/ns/" + defaultValue + "-2021-lab-4/graph";
  
  
  /*
  for (var i = 0, len = sg_numbers.length | 0; i < len; i = (i + 1) | 0) {
    sg_numbers[i].textContent = default_sg_number;
  }

  for (var i = 0, len = allRouteNames.length | 0; i < len; i = (i + 1) | 0) {
    allRouteNames[i].textContent = 'drone-controller.' + defaultValue + '-2020-lab-2.svc.cluster.local';
  }

  for (var i = 0, len = allYAML.length | 0; i < len; i = (i + 1) | 0) {
    allYAML[i].textContent = 'http://drone-lab-2-yaml-template-lab-2-admin.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/api-connect-template/' + defaultValue + '.yaml';
  }

  for (var i = 0, len = allAppConnect.length | 0; i < len; i = (i + 1) | 0) {
    allAppConnect[i].textContent = 'http://drone-lab-2-yaml-template-lab-2-admin.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/app-connect-template/' + defaultValue + '.yaml';
  }
  /*/

  
}

function createCollapseButton(nav) {
  const collapseBtn = document.createElement("div");
  collapseBtn.classList.add("collapse-button");

  const expandedState = document.createElement("div");
  expandedState.classList.add("collapse-button__collapse");
  const expandedStateIcon = document.createElement("span");
  expandedStateIcon.classList.add("collapse-button__collapse--icon");
  expandedStateIcon.classList.add("material-icons");
  expandedStateIcon.innerText = "arrow_back";
  const expandedStateLabel = document.createElement("span");
  expandedStateLabel.classList.add("collapse-button__collapse--label");
  expandedStateLabel.innerText = "Collapse";
  expandedState.appendChild(expandedStateIcon);
  expandedState.appendChild(expandedStateLabel);
  collapseBtn.appendChild(expandedState);

  const collapsedState = document.createElement("div");
  collapsedState.classList.add("collapse-button__expand");
  const collapsedStateIcon = document.createElement("span");
  collapsedStateIcon.classList.add("collapse-button__expand--icon");
  collapsedStateIcon.classList.add("material-icons");
  collapsedStateIcon.innerText = "arrow_forward";
  const collapsedStateLabel = document.createElement("span");
  collapsedStateLabel.classList.add("collapse-button__expand--label");
  collapsedStateLabel.innerText = "Expand";
  collapsedState.appendChild(collapsedStateIcon);
  collapsedState.appendChild(collapsedStateLabel);
  collapseBtn.appendChild(collapsedState);

  nav.querySelector(".tabs__list").appendChild(collapseBtn);
}


function getQValue(q_term = "q") {
  let search = window.location.search;
  search = search.split("?")[1];
  let search_arr = search.split("&");
  let q = search_arr.reduce((acc, cur) => {
    if (acc !== undefined) {
      return acc;
    }
    const tmp = cur.split("=");
    cur = {
      key: tmp[0],
      value: tmp[1]
    }
    if (cur.key === q_term) {
      acc = cur.value
    }
    return acc;
  }, undefined);
  return q;
}



/* console.log(getQValue("sg_number")); */


/* New for Lab 2 */

function lab1Completed() {
  var checkBox = document.getElementById("lab1Complete");
  var text = document.getElementById("lab1Confirmation");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}


function testpageCompleted() {
  var checkBox = document.getElementById("testpageComplete");
  var text = document.getElementById("hidden_1_5_2");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function stormAppCompleted() {
  var checkBox = document.getElementById("stormAppComplete");
  var text = document.getElementById("hidden_3_1_2");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}


/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("numSlide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" redCarousel", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " redCarousel";
}

showDivs(1);
*/

/*
function setCloudHost() {
    if (input.value === "") {
      confirmText.innerHTML = "Please paste the Cloud Host URL first.";
      confirmText.style.display = "inline-block";
    return
    }
  
  defaultCloudHost = input.value;
  
  //defaultCloudHost

  confirmText.innerHTML =
    '<p class="congrats">Great work! This URL you pasted will be referenced in later steps – for your convenience, it’ll be stored locally on this instructions site for now. Let’s test this new Cloud Host URL.</p><p><a href="https://' + defaultCloudHost + '" target="_blank"><span class="cloudHostHere">' + defaultCloudHost + ' </span></a> (open link in a new tab)</p>'
  
  confirmText.style.display = "inline-block";
  document.getElementById('afterCloudHost').style.display = "block";
 
  for (var i = 0, len = allCloudHost.length | 0; i < len; i = (i + 1) | 0) {
    /*allCloudHost[i].href =
      'https://' + defaultCloudHost;*/
    /*allCloudHost[i].textContent =
      defaultCloudHost;
  }
  
}*/

/*
function checkpoint1() {
  document.getElementsByClassName('checkpoint1')[0].innerHTML = "32.9426934,-96.994849";
}
 
 function checkpoint2() {
  document.getElementsByClassName('checkpoint1')[1].innerHTML = "32.9426934,-96.994849";
 }
 */

let q1_1 = 
["When working with a data set, you can import images or video clips",
"Once a video clip has been imported, you can capture specific frames manually or choose to allow MVI to auto-capture frames at a given interval",
"The frames captured will be used in future MVI steps to “prepare” and “train” the model",
"The interface during this step was simple enough for a non-technical user to navigate"];

let q1_2 = 
["When working with a data set, you can choose to do image classification (via “Assign Category”) or object detection (via “Label Objects”)",
"Our stormwater operation subject matter expert chose to Label Objects to detect objects (ex: vehicles, and potential flooding situations)",
"The user can simply create label(s) to represent each type of object in the image to detect, and then draw bounding boxes around the portion of the frame that contains the desired object",
"You need to define multiple instances for each object across multiple frames in order to train a model, but accuracy can be improved with additional images/labels",
"MVI’s Data Augmentation allows the user to create additional/duplicate images from the dataset with different characteristics (image quality, orientation, etc) in order to help improve accuracy",
"Auto-labeling can also be used if a deployed version of a model already exists, which is useful when re-training an existing model with additional images. Note that the auto-labeled images can still be adjusted manually as needed",
"The interface during this step was simple enough for a non-technical user to execute, and there is great documentation with hints/tips available around best practices"];

let q1_3 = 
["There are different types of training available (Image Classification, Object Detection, Action Detection), but our stormwater operation subject matter expert would focus on Object Detection",
"GPUs (graphical processing units) are a hardware-based requirement to train and run custom models optimized for high accuracy, for real-time processing and other mission critical context (like Public Safety!)",
"The training process duration depends on number of images/labels",
"The user has the option to stop the training process as soon as the ”Loss” value in the Loss Vs Iteration graph starts to level out",
"The interface during this step was simple enough for a non-technical user to execute, and there is great documentation with hints/tips and granular information about different training options and GPU considerations available to help when necessary"];

let q1_4 = 
["The model can deployed within the MVI inference engine or it can be exported to a different system",
"You can click the deployed model to get the API endpoint, to view details about the model, such as the owner and the accuracy, and to test other videos or images against the model. You can use the details of the model to determine if you need to re-train or augment the model",
"In our stormwater model, you can see precise details on the the number of objects/images that are contained within",
"You can test the model from within the MVI interface directly, which allows you to import an image or video to process the results with the detected objects, including confidence levels for each specific object instance",
"The model that was deployed will be used in the next steps of the lab Maximo Visual Inspection (MVI) test page and again in our Remote Drone Console application for Stormwater Management",
"The interface during this step was simple enough for a non-technical user to execute via one-click"];

let q2_1 = 
["You can create a device type for each grouping of devices that have similar characteristics",
"The device types focused on in the lab were related to those that would be relevant to stormwater operators",
"After device type creation, you can register a device and associate it to that type",
"Device attributes can be inherited from the parent device type, only specifying the differentiating values along with any metadata",
"A token is defined/generated to allow the device to connect to the Maximo Monitor IoT Tool"];

let q2_2 = 
["An interface has two parts: the <b>physical interface</b> and the <b>logical interface</b>.",
"The physical interface represents the actual data structure of the data coming out from the device.",
"The logical structure creates the application-specific information for an end application.",
"Here, you can also do data transformation or other mappings as required. In our case, we did a basic conversion from cubic feet to gallons.",
"Rule-based notifications can be defined in the interface. This can be an effective strategy to raise awareness of anomalies. <a href='https://www.ibm.com/support/knowledgecenter/SSQP8H/iot/platform/reference/embeddedrules/notification_strategies.html' target='_blank'>Read more here</a>.",
"There is a lot of powerful flexibility that can be used with the IoT Tool’s logical interface definitions. <a href='https://www.ibm.com/support/knowledgecenter/SSQP8H/iot/platform/GA_information_management/ga_im_definitions.html' target='_blank'>You can learn more here</a>.",
"Once the two parts of the interface have been defined, you simply need to Activate it for that device type."]

let q2_3 = 
["The Maximo Monitor IoT Tool has a Device Simulator that can be used to test before physically connecting to an actual device",
"Even though we used a simulator, you may have noticed that the payload was from an actual flow volume sensor",
"Browse the device to see recent events, and thus monitor the receipt of device data including those attributes that required some form of transformation",
"The device simulator has the powerful capability to quickly test new device types and interfaces, and is thus vital during application integration or testing. Learn more about simulating devices <a href='https://www.ibm.com/support/knowledgecenter/SSQP8H/iot/platform/reference/dashboard/device_sim.html' target='_blank'>here</a>."];

let q2_4 = 
["Maximo Monitor makes it easy to evaluate the data values from the sensor devices",
"It has a catalog of functions to perform <a href='https://www.ibm.com/support/knowledgecenter/SSQR84_8.2.0/iot/analytics/as_add_calculations.html' target='_blank'>calculations</a> and anomaly models <a href='https://www.ibm.com/support/knowledgecenter/SSQR84_8.2.0/iot/analytics/as_overview.html' target='_blank'>available</a>",
"In our stormwater case, we used the high value threshold and were able to define various severity and naming conventions that might help stormwater operators quickly make sense of the situation",
"Maximo Monitor allows the user to create Summary views for a device to monitor trends over time.",
"The summary can be reflected into a visualization to help monitor the sensor data from an easy interface.",
    "There is great documentation available on Maximo Monitor dashboard options <a href='https://www.ibm.com/support/knowledgecenter/SSQR84_8.2.0/iot/dashboard/monitoring.html' target='_blank'>here</a>."];

let q3_1 = 
["In the <b>Location Video</b>, you considered how the analytic overlays indicate MVI object detections that can help direct the operator's attention to relevant activities.",
"In the <b>Location Map</b>, you noticed the drone location was moving based on progression of video/time, and you were able to find and review sensors, alerts and layers in that same proximity that would be relevant to an operator.",
"In the <b>Alerts panel</b>, you noticed Video and Drone alerts occurring as the video/time progressed, and you recognized that MVI object detections were part of the details for each of those alerts.",
"You also saw Weather and Sensor alerts, including one from <b>Flow Volume sensor</b>, which reminded you about the configuration in Maximo Monitor that could evaluate measurement readings and trigger actions when the values are outside of defined thresholds for that device.", 
"You also considered how the <b>consolidation</b> of relevant information from video, weather, traffic, and other sources/systems within the Alerts panel can help the stormwater operator understand the situation and prioritize a response, and you looked at the detail for the alert reported directly from a citizen about dangerous street-level flooding in the Coppell area around North Lake.",
"You realized the benefit of having actionable insights when coordinating a response as you navigated the Actions section, and you considered how the <b>Intelligent Dispatch</b> tool can help locate the ideal responder (in terms of location, equipment, and availability) while the <b>Insights/Recommendations</b> tool can provide guidance for a specific alert/location based on historical outcomes."];


function getA(thisq, num) {
  let newnum = parseInt(num) + 1;
  let currentQ = document.getElementById(thisq + `_area`);

  let nextpt = document.getElementById(thisq + `_` + num + `pt`);

  if (nextpt != null) {
  }
  else {
     if (num < Function('"use strict";return (' + thisq + ')')().length) {
      currentQ.innerHTML = currentQ.innerHTML + `<div id="` + thisq + `_` + num + `pt" class="checksquare keypt" onclick="this.classList.remove('keypt');this.classList.add('keyptdone');getA('` + thisq + `',` + newnum + `)"><span>` + Function('"use strict";return (' + thisq + ')')()[num] + `</span></div>`;
    }
     else {
      currentQ.innerHTML = currentQ.innerHTML + `<div id="` + thisq + `_` + num + `pt" class="nicework">🎉 Nice work! You identified all the key points in the above video. Continue to the next step.</div>`;
    }
  }
}


getA('q1_1', 0);
getA('q1_2', 0);
getA('q1_3', 0);
getA('q1_4', 0);

getA('q2_1', 0);
getA('q2_2', 0);
getA('q2_3', 0);
getA('q2_4', 0);

getA('q3_1', 0);



