import './MainDashBoardPage.css';

const MainDashBoardPage = () => {
    // 날짜 타입
    let date = new Date();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <main>
            <h1>DashBoard</h1>
            <div className='base_form'>
                {/* 한 개의 글 */}
                <div className='board-item'>
                    {/* 제목 부분 */}
                    <div className='board-item-title'>
                        <span>Title</span>
                        <span>{month}/{day}/{year}</span>
                    </div>
                    {/* 글 내용 부분 */}
                    <div className='board-item-content'>
                        <div>
                            Content
                        </div>
                    </div>
                    {/* 글 조작 버튼 부분 */}
                    <div>
                        <span>등록</span>
                        <span>수정</span>
                        <span>삭제</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainDashBoardPage;