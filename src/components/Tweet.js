import { dbService, storageService } from 'firebaseInstance';
import React, { useState } from 'react'

const Tweet = ({ tweetObj, isOwner }) => {

    const [editing, setEditing] = useState(false);
    const [newText, setNewText] = useState(tweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("정말 이 트윗을 삭제하시겠습니까?");
        if (ok) {
            if (tweetObj.attachmentURL !== "") {
                // 사진이 존재하면 Storage에서 먼저 삭제하고
                await storageService.refFromURL(tweetObj.attachmentURL).delete();
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
        <div>
            {
                editing ?
                    // 수정하기 버튼을 누르면 form이 떠야한다.
                    (
                        <>
                            <form onSubmit={onSubmit}>
                                <input
                                    type="text"
                                    placeholder="수정된 내용을 적으세요!"
                                    value={newText}
                                    onChange={onChange}
                                    required />
                                <input type="submit"
                                    value="트윗 수정하기" />
                            </form>
                            <button
                                onClick={toggleEditing}>취소</button>
                        </>
                    )
                    :
                    // 수정하기가 아니면 트윗 리스트를 보여준다.
                    (
                        <div>
                            <h4>{tweetObj.text}</h4>
                            {tweetObj.attachmentURL &&
                                <>
                                    <img src={tweetObj.attachmentURL}
                                        width="150px"
                                        height="150px" />
                                </>
                            }
                            {
                                isOwner &&
                                <>
                                    <button
                                        onClick={onDeleteClick}>삭제하기</button>
                                    <button
                                        onClick={toggleEditing}>수정하기</button>
                                </>
                            }
                        </div>
                    )
            }
        </div>

    );
}

export default Tweet;

