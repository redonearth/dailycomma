package com.yedam.dailycomma.room;

import com.yedam.dailycomma.lodgment.LodgmentDTO;
import com.yedam.dailycomma.lodgment.LodgmentSearchDTO;

import java.util.List;

public interface RoomService {

	/*건수 조회 추후 토탈 이미지로 들어갈 예정*/
	public RoomDTO getDetailRoom(RoomDTO dto);

	/* 숙박 업체에 대한 전체 객실 리스트*/
	public List<RoomDTO> getDetailRooms(LodgmentSearchDTO dto);

	/*숙박 업체에 대한 전체 후기 리스트*/
	public List<RoomPostDTO> getDetailRoomPosts(LodgmentDTO dto);

    /*숙박 업체에 대한 상세 후기*/
    public RoomPostDTO getDetailPost(RoomPostDTO dto);

	//객실 등록
	public int insertRoom(RoomDTO dto);

    public List<RoomDTO> getAllimage(LodgmentDTO dto);
}
