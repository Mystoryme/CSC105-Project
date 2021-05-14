package com.example.myplan.controller.todolist;

import com.example.myplan.util.MySqlConnection;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ListTodo {
	
	@GetMapping(path = "/todolist/list")
	public Map<String, Object> addtodo(@CookieValue int userid) {
		Map<String, Object> res = new HashMap<>();
		
		try {
			Connection connection = MySqlConnection.getConnection();
			PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM todo WHERE owner = ?");
			preparedStatement.setInt(1, userid);
			ResultSet resultSet = preparedStatement.executeQuery();
			
			ArrayList<Object> arr = new ArrayList<>();
			while (resultSet.next()) {
				Map<String, Object> list = new HashMap<>();
				list.put("id", resultSet.getInt("id"));
				list.put("title", resultSet.getString("text"));
				list.put("date", resultSet.getDate("date").getTime());
				list.put("isfinish", resultSet.getBoolean("is_finish"));
				list.put("borderColor", resultSet.getBoolean("is_finish") ? "lightgreen" : "red");
				arr.add(list);
			}
			res.put("success", true);
			res.put("list", arr);
			return res;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		res.put("success", false);
		return res;
	}
}
