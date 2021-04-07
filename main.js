
var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Wilma',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'No e no. Odio il tuo cane.',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'George',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma preferirei fissare una parete bianca per ore.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Kevin',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Come fai a sapere che mia sorella è in campagna? Chi sei e cosa vuoi dalla mia famiglia?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luke',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Shhh, lo sai che gli agenti della cia leggono tutto.',
                            status: 'received'
                        }
                    ],
                },
            ],
            currentContact: 0,  //index contatto
            currentMessage: null,   //index messaggio
            messageText: "",    //campo vuoto messaggio
            search: "",     //campo vuoto ricerca contatti
        },
        methods: {
            // funzione per impostare l'index del contatto cliccato
            setIndexContact: function(position) {
                this.currentContact = position;
                return this.currentContact;
            },
            // funzione che inserisci messaggio scritto nell'array e da la risposta
            newMessage: function(contact) {
                let newSentMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.messageText,
                    status: 'sent'
                };

                this.filteredContacts[contact].messages.push(newSentMessage);

                this.messageText = "";

                setTimeout(
                    ()=> {
                        let newReceivedMessage = {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: "Ok.",
                            status: 'received'
                        };

                        this.filteredContacts[contact].messages.push(newReceivedMessage);

                    },1000
                );
            },
            // funzione per impostare l'index del messaggio al mouseenter
            setIndexMessage: function(position) {
                this.currentMessage = position;
                return this.currentMessage;
            },
            // funzione per rimuovere l'index del messaggio al mouseleave
            removeIndexMessage: function() {
                this.currentMessage = null;
                return this.currentMessage;
            },
            // funzione per eliminare il messaggio
            deleteMessage: function(position, messagePosition) {
                this.filteredContacts[position].messages.splice(messagePosition, 1);
            },
        },
        // funzione per filtrare i contatti
        computed: {
            filteredContacts() {
                return this.contacts.filter(
                    element => {
                        return element.name.toLocaleLowerCase().includes(this.search.toLowerCase());
                    }
                );
            }
        }
    }
);
