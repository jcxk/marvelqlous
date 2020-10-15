const {RESTDataSource} = require('apollo-datasource-rest');
import _ from "lodash";

const userTypes = {
    professional: "PROFESSIONAL",
    patient: "PATIENT"
}
const reviews = {

    "30191f5c-67e4-34b8-97ce-1722303a0c81": "GOOD"
}

class ChatAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:4000/api';
    }

    reduceUser(item) {
        return {
            id: _.get(item, "user_id", ""),
            name: _.get(item, "name", ""),
            avatar: _.get(item, "avatar", "")
        }
    }

    reduceMessage(item) {

        let sender = {};
        if (_.get(item, "professional.user_id", null) === item.sender_id) {
            sender = this.reduceUser(item.professional);
            sender.type = userTypes.professional;
        } else {
            sender = this.reduceUser(item.patient);
            sender.type = userTypes.patient;
        }
        return {
            id: item.message_id,
            sender: sender,
            time: new Date(item.sent_at)

        }
    }

    reduceRoom(item, index) {
        let roomObj = {
            id: item.room_id,
            user: {
                id: item.user.user_id,
                name: item.user.name,
                avatar: item.user.avatar
            },
            messages: _.map(item.messages, (msg) => this.reduceMessage(msg))
        }
        roomObj.review = _.get(reviews, roomObj.id, "PENDING")
        return roomObj;
    }


    async getAllRooms() {
        const response = await this.get('chat').then(r => r.result);

        // transform the raw launches to a more friendly
        return Array.isArray(response)
            ? response.map(room => this.reduceRoom(room)) : [];
    }

    async getRoomById({ roomId }) {
        const rooms = await this.get('chat').then(r => r.result);
        const room = _.find(rooms, function(room) { return room.id == roomId; });
        return room != null ? this.reduceRoom(room) : { }
        return room;
    }

}

module.exports = ChatAPI;
