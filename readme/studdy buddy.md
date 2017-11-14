# setup

0. cd \scraper
//to init sb collection in db
1. node StudyBuddyTesting 1
// to populate with some users ie ms5@gmail.com
2. node StudyBuddyTesting
// to calculate studyBuddies
3. node studdybuddychron
    ctrl c when it stops displaying sections

# api
api call to /studyBuddies/get
add email to body as in:
{
    "email": "MS5@gmail.com"
}

will recive an array of sections, check to see if you have req.error for error

