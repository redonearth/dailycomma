package com.yedam.dailycomma.reservation;

import java.util.List;
import java.util.Map;

import com.yedam.dailycomma.room.RoomDTO;

public interface ReservationService {
	
	public int insertReservation(ReservationDTO dto);

	public int updatetReservation(ReservationDTO dto);

	public int deleteReservation(ReservationDTO dto);
	
	public int getReservation(ReservationDTO dto);
	
	public List<ReservationDTO> getReservations(ReservationSearchDTO searchDto);

	public int getCnt(ReservationSearchDTO searchDto);
	
	public Map<String,Object> getReserveInfo(String roomNo);
	
	public String getLocation(ReservationDTO dto);
}
