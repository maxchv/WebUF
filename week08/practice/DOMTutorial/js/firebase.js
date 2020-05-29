const process = {
    firebaseConfig: {
        apiKey: 'AIzaSyBvR7BIHXwChpYp4AEKzEr2J5_9y_j3q3U',
        authDomain: 'dom-tutorial.firebaseapp.com',
        projectId: 'dom-tutorial'
    },
    init: function () {
        do {
            this.fullName = prompt("Введите свое ФИО");
        } while (!this.fullName);
        // Initialize Firebase
        firebase.initializeApp(this.firebaseConfig);
        this.db = firebase.firestore();
        this.register(this.db);
    },
    register: function (db) {
        db.collection("users").add({
                fullName: this.fullName,
                timestamp: new Date()
            })
            .then((docRef) => {
                console.log("Register ID: ", docRef.id);
                this.key = docRef.id;
                this.eventHandler(this.key);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                this.error = error;
            });
    },
    eventHandler: function (key) {
        const ref = this.db.collection("users").doc(key);

        document.addEventListener("click", (e) => {
            const target = e.target;
            if (target.nodeName == 'SPAN') {
                const parent = target.parentNode;
                if (parent.nodeName == 'BUTTON' && parent.id && parent.id.startsWith("execute")) {
                    const taskId = /\d+/.exec(parent.id)[0];
                    const code = document.querySelector(`#code${taskId}`).getValue();
                    console.log(taskId, code);
                    ref.collection(`tutorial3`)
                        .add({
                            task: taskId,
                            code: code,
                            timestamp: new Date()
                        })
                        .then((docRef) => console.log(`Saved. ID: ${docRef.id}`))
                        .catch((error) => console.log(error));
                }
            }
        });
    }
};

process.init();