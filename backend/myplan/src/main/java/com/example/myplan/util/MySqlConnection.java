package com.example.myplan.util;

import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Logger;

public class MySqlConnection {
    private static final String db_url = "jdbc:mysql://csproject-proxy.cslab.bsthun.com:1206/db63130500243";

    private static Connection connection;

    public static Connection getConnection() throws SQLException {
        if (!connection.isValid(200)) {
            return reConnect();
        }
        return connection;
    }

    public static Connection reConnect() throws SQLException {
        connection = DriverManager.getConnection(db_url, "63130500243", "abcd1234");
        return connection;
    }
}
