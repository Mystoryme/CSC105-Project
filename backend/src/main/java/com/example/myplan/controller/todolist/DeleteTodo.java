package com.example.myplan.controller.todolist;

import com.example.myplan.util.MySqlConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class DeleteTodo {
	
	@DeleteMapping(path = "/todolist/delete/{id}")
	public Map<String, Object> deletetodo(@PathVariable int id, @CookieValue int userid) {
		Map<String, Object> res = new HashMap<>();
		
		try {
			Connection connection = MySqlConnection.getConnection();
			PreparedStatement preparedStatement = connection.prepareStatement(
					"DELETE FROM todo WHERE id = ? AND owner = ?");
			preparedStatement.setInt(1, id);
			preparedStatement.setInt(2, userid);
			int update = preparedStatement.executeUpdate();
			if (update > 0) {
				res.put("success", true);
			} else {
				res.put("success", false);
				res.put("text", "Plan not found.");
			}
			return res;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		res.put("success", false);
		res.put("text", "Error");
		return res;
	}
}
