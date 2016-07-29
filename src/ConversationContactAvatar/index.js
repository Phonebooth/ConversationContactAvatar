import React, { Component } from 'react'

import Avatar from 'material-ui/Avatar'
import Person from 'material-ui/svg-icons/social/person'

import {
    blue300,
    indigo900,
} from 'material-ui/styles/colors';

export default class ConversationContactAvatar extends Component {
    render() {
        const {
            isCalling,
            size
        } = this.props

        if (isCalling) {

        }

        return (
            <Avatar
                size={size}
                color={blue300}
                backgroundColor={indigo900}
                icon={<Person />}
                />
        )
    }
}
