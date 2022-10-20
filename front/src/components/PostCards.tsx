import { useState, useEffect, MouseEvent } from "react";
import { constSelector, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
/*styles*/
import {
    ArtContainer,
    Article,
    Contents,
    Details,
    Box,
    Time,
    DetailContainer,
} from "@/styles/common/requestCard-style";

//real data interface
import { PostLists, LikedPostsLists } from "@/types/post";
import userState from "@/recoil/user";
//API import
import API from "@/api/.";
//error handling
import { ROUTES } from "@/routes/.";
/**
 * postList: 각 페이지당 갖고 있는 포스트들 데이터 (부모에서 받음)
 * currentPage: 현재 페이지 위치
 */

const PostCards = (prop: {
    postLists: PostLists | null;
    currentPage: number;
    deleteMode: boolean;
}) => {
    const navigate = useNavigate();
    const user = useRecoilValue(userState);
    console.log("user?", user);
    const postlist = prop.postLists;
    const currentPageNum = prop.currentPage + 1;
    //관리자 모드에서 삭제하기 기능?
    //const deleteModeOn = prop.deleteMode;
    const [likesList, setLikesList] = useState(0);
    const [like, setLike] = useState(0);
    //const [userLiked, setUserLiked] = useState<LikedPostsLists | null>(null);

    //처음 데이터를 가져올 때에는 user가 like했다고 생각하지 않는다고 가정한다.
    const [userLiked, setUserLiked] = useState(false);
    //
    const [isUserLike, setIsUserLike] = useState(false);
    const [handlieLikeNum, sethandlieLikeNum] = useState(0);

    // useEffect(() => {
    //     const putLike = async(params);
    // }, []);

    //이미 투표했는지 체크
    useEffect(() => {
        const getLikedData = async () => {
            const result = await API.get(["board", "likePost"]);
            //응답이 null 경우 체크()
            if (result === null) {
                navigate(ROUTES.ErrorPage.path);
                return; //to alret
            }
            return result.data;
        };
        getLikedData().then((res: any) => {
            //응답이 undefined 경우 체크(2)
            if (res === undefined) {
                navigate(ROUTES.ErrorPage.path);
                return; //to alret
            }
            //console.log("res", res);
            const likedPostslist = res.map((likedpost: any) => {
                return likedpost.post_id;
            });
            //console.log("타입 likedlists", typeof likedPostslist);
            //console.log("테스트", likedPostslist[0]);
            setLikesList(likedPostslist);

            //const checking = likesList.includes(18);
            //console.log(checking);
        });
    }, []);

    //좋아요 관련

    const puttingLike = async (param: string, data: any) => {
        const result = await API.post<number>(["vote", param], data);
        return result;
    };

    const deletingPost = async (param: string) => {
        const result = await API.delete<number>(["board", param]);
        return result;
    };

    console.log("handlieLikeNum", handlieLikeNum);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (user) {
            //해당 게시글의 id(post_id 가져오기)
            const { name } = e.target as HTMLButtonElement;
            console.log("몇 번 게시글을 눌렀니?", name);
            console.log("네임 타입?", typeof name);
            puttingLike(name, "");

            const isAlreadyLiked = likesList.includes(parseInt(name));
            console.log("과거에 이미 추천했니? ", isAlreadyLiked);
            console.log("현재 페이지에서 추천했었니?:", isUserLike);
            //이미 추천했으면 아무것도 안 함
            if (isAlreadyLiked) {
                console.log("이미 추천했어요! NO추천!!");
                console.log("과거에 이미 추천했니? ", isAlreadyLiked);
                console.log("현재 페이지에서 추천했었니?:", isUserLike);
                return;
            }
            //아직 추천을 안 했고.... 지금 추천상태인지 체크
            //기존 데이터에 따르면 추천 안 했는데 현재 페이지에서 추천을 했는데 클릭한 거니까
            //1) 추천상태를 false로 바꾸고 2. 더한 값을 빼줘야 함
            if (isUserLike) {
                console.log("현재 페이지에서 추천했는데 뺐어요!!");
                setIsUserLike(false);
                return sethandlieLikeNum(0);
            }
            //기존 데이터에서 추천도 안했고 현재 상태도 추천을 안했다 그러면 추천해야지
            console.log("DB에도 없고 이 화면에서도 추천취소든/첨이든 암튼 추천해요!");
            setIsUserLike(true);
            sethandlieLikeNum(1);
            return;
        }
        return;
    };

    return (
        <>
            {postlist ? (
                <>
                    {postlist[currentPageNum].map((post, idx) => (
                        <Article key={idx}>
                            <ArtContainer>
                                <Contents>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </Contents>
                                <Box>
                                    <button name={`${post.id}`} onClick={onClick}>
                                        {post._count.VotePost + handlieLikeNum}
                                    </button>
                                    <span
                                        onClick={() => {
                                            if (user?.nickname === post.author) {
                                                deletingPost(`${post.id}`);
                                            }
                                        }}
                                    >
                                        삭제
                                    </span>
                                    {/* {deleteModeOn ? (
                                        <>
                                            <span>
                                                <input type="checkbox" name={`${post.id}`}></input>
                                            </span>
                                        </>
                                    ) : (
                                        <></>
                                    )} */}
                                </Box>
                            </ArtContainer>
                            <DetailContainer>
                                <Details>
                                    <li>
                                        <span>작성자</span>
                                        <span>{post.author}</span>
                                    </li>
                                    <li>
                                        <i></i>
                                        post.comments 개의 댓글
                                    </li>
                                    <li>
                                        <i></i>
                                        {post.view} views
                                    </li>
                                </Details>
                                <Time>{post.createdAt}</Time>
                            </DetailContainer>
                        </Article>
                    ))}
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default PostCards;
