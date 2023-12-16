
/** 
 * Generate the unique id
 */
function generateID (){
    return Math.random().toString(36).slice(2)
}

function isStoreExist(){
    return !!Object.keys(store).length;
}


function generateRandomAppointmentDateTime() {
    // Default start and end times
    var startTime = '09:00';
    var endTime = '17:00';

    // Default date (today)
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Parse time strings to Date objects
    var startDate = new Date(currentDate.getTime() + parseTimeToMilliseconds(startTime));
    var endDate = new Date(currentDate.getTime() + parseTimeToMilliseconds(endTime));

    // Calculate the time range in milliseconds
    var timeRange = endDate - startDate;

    // Generate a random time within the range
    var randomTime = new Date(startDate.getTime() + Math.random() * timeRange);

    return randomTime;
}

function parseTimeToMilliseconds(timeString) {
    var parts = timeString.split(':');
    var hours = parseInt(parts[0], 10);
    var minutes = parseInt(parts[1], 10);

    return hours * 60 * 60 * 1000 + minutes * 60 * 1000;
}