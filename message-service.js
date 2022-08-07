export default class MessageService {
    getAllMessages() {
        const request = new XMLHttpRequest();

        new Promise(function (resolve, reject) {
            // Setup our listener to process compeleted requests
            request.onload = function() {
                if (request.status >= 200 && request.status < 300) {
                    // If successful
                    const threads = JSON.parse(request.responseText);
                    // this data is passed to the success callback
                    resolve(threads);
                } else {
                    // this data is passed to the failure callback
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };

            request.open("GET", "http://zipcode.rocks:8085/messages");

            request.send();
        }).then(successCallback, errorCallback);

        function successCallback() {
            // This data comes from the resolve method
            console.log("Promise is successful!");
        }

        function errorCallback() {
            // This data comes from the reject method
            console.log("An error occurred");
        }
    }
}