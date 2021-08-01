import { dbService, storageService } from 'firebaseInstance';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Tweet = ({ tweetObj, isOwner }) => {

    const [editing, setEditing] = useState(false);
    const [newText, setNewText] = useState(tweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("정말 이 트윗을 삭제하시겠습니까?");
        if (ok) {
            if (tweetObj.attachmentUrl !== "") {
                // 사진이 존재하면 Storage에서 먼저 삭제하고
                await storageService.refFromURL(tweetObj.attachmentUrl).delete();
            }
            // 트윗을 삭제한다.
            await dbService.doc(`tweets/${tweetObj.id}`).delete();

        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);


    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`tweets/${tweetObj.id}`)
            .update({
                text: newText
            });
        setEditing(false);
    }

    const onChange = (event) => {
        const {
            target: { value }
        } = event;

        setNewText(value);
    }

    return (
        <div className="tweet">
            {
                editing ?
                    // 수정하기 버튼을 누르면 form이 떠야한다.
                    (
                        <>
                            <form onSubmit={onSubmit} className="container tweetEdit">
                                <input
                                    type="text"
                                    placeholder="수정된 내용을 적으세요!"
                                    value={newText}
                                    onChange={onChange}
                                    autoFocus
                                    className="formInput"
                                    required />
                                <input type="submit"
                                    className="formBtn"
                                    value="트윗 수정하기" />
                            </form>
                            <button
                                onClick={toggleEditing}
                                className="formBtn cancelBtn">취소</button>
                        </>
                    )
                    :
                    // 수정하기가 아니면 트윗 리스트를 보여준다.
                    (
                        <div>
                            <h4>{tweetObj.text}</h4>
                            {tweetObj.attachmentUrl && <img src={tweetObj.attachmentUrl} />}
                            {
                                isOwner && (
                                    <div class="tweet__actions">
                                        <span onClick={onDeleteClick}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                        <span onClick={toggleEditing}>
                                            <FontAwesomeIcon icon={faPencilAlt} />
                                        </span>
                                    </div>
                                )
                            }
                        </div>
                    )
            }
        </div>

    );
}

export default Tweet;

