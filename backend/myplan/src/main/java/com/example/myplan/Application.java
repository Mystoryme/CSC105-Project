package com.example.myplan;

import com.example.myplan.util.MySqlConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.SQLException;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {

		SpringApplication.run(Application.class, args);

		try {
			MySqlConnection.reConnect();
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
