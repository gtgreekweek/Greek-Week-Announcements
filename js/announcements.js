// Load Standings

function loadAnnouncements() {
    //showPointsForChapterAtRow(10, fraternity)

    getChapterArrays(function(announcements) {
        renderListOfAnnouncmentsIntoDiv(announcements)
    })
}

function renderListOfAnnouncmentsIntoDiv(announcements) {
    console.log("rendering!", announcements);

    var renderedContent = "";

    // Loop through and display the announcement
    for (var i = 0; i < announcements.length; i++) {
        var announcement = announcements[i];

        renderedContent += `
            <div class='announcementCard'>
                <div class='announcementHeader'>
                    <h1>${announcement['title']}</h1>
                    <h2>${moment.unix(announcement['timestamp']).format("dddd, MMMM Do [at] h:mma")}<h2>
                </div>
                <div class='announcementBody'>
                    <p>${announcement['message']}</p>
                </div>
            </div>`;
    }

    renderedContent += "</table></div>";
    $("#announcements").html(renderedContent);
}

