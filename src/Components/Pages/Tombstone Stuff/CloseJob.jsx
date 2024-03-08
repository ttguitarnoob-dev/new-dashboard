//3 checkboxes: generate invoice, email invoice, update paid
//job data will be present, so if there is already an invoice link, generate invoice will not display. It will say Invoice already present, click here to view
//boolean variable for each checkbox, true if checked
//function for each checkbox:
//generate invoice will make a post request to the correct route, which will create teh invoice db entry and then update the job from emailLink: null to emailLink: "thelink"
//email function will simply send an email, however I decide to do that, probably another backend route
//update paid will just do a post request to update that job
//submit button will trigger its own function that has if generate = true, then run its function, etc