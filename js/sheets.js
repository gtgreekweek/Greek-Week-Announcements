// CONSTANTS
var dataDocument = "https://docs.google.com/spreadsheets/d/1_G8Hy5V3Kcw_ddSn0v1b3x338zZgIbVCzSh81kFARws/edit?usp=sharing"

// Uses Tabletop to load announcements from Google Sheets
function getChapterArrays(completion) {
    Tabletop.init(
        {
            key: dataDocument,
            simpleSheet: true,
            callback: function(data, tabletop) {

                announcementsData = decomposeTabletopIntoAnnouncementArray(data)
                completion(announcementsData)
            },
        }
    );
}

function decomposeTabletopIntoAnnouncementArray(data) {
    // sort in descending order by timestamp
    return data.sort(function(a, b) {
        return b['timestamp'] - a['timestamp'];
    });
}
