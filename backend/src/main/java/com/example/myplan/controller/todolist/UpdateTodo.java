package com.example.myplan.controller.todolist;

import com.example.myplan.model.Task;
import com.example.myplan.util.MySqlConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/todolist")

public class UpdateTodo {
	@PostMapping(path = "/update/{id}")
	public Map<String, Object> updatetodo(@RequestBody Task task, @PathVariable int id, @CookieValue int userid) {
		
		Map<String, Object> res = new HashMap<>();
		try {
			Connection connection = MySqlConnection.getConnection();
			PreparedStatement preparedStatement = connection.prepareStatement(
					"UPDATE todo SET text = ?, date = ?, is_finish = ? where id = ? AND owner = ?");
			preparedStatement.setString(1, task.getText());
			Date date = new Date(task.getDate());
			preparedStatement.setDate(2, date);
			preparedStatement.setBoolean(3, task.getDone());
			preparedStatement.setInt(4, id);
			preparedStatement.setInt(5, userid);
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
			res.put("success", false);
		}
		return res;
	}
}
