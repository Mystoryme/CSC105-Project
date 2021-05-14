package com.example.myplan.controller.account;

import com.example.myplan.util.MySqlConnection;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/account")
public class Login {
	@PostMapping(path = "/login")
	public Map<String, Object> login(@RequestParam String email, @RequestParam String password) {
		
		Map<String, Object> res = new HashMap<>();
		try {
			Connection connection = MySqlConnection.getConnection();
			PreparedStatement preparedStatement = connection.prepareStatement(
					"SELECT * from user where email = ? and password = ?");
			preparedStatement.setString(1, email);
			preparedStatement.setString(2, password);
			ResultSet resultSet = preparedStatement.executeQuery();
			
			if (resultSet.next()) {
				res.put("user_id", resultSet.getInt("user_id"));
				res.put("username", resultSet.getString("username"));
				res.put("isLogin", true);
			} else {
				res.put("isLogin", false);
				res.put("error", "email or password incorrect");
			}
		} catch (SQLException e) {
			e.printStackTrace();
			res.put("success", false);
		}
		return res;
	}
}
