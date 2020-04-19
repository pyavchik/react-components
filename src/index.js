import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 4:45PM"
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 2:00PM"
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 5:00PM"
                    comment={faker.lorem.sentence() }
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App/>, document.querySelector('#root'))
