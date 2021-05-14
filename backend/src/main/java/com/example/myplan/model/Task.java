package com.example.myplan.model;

public class Task {
	private String text;
	private long date;
	private Boolean done;
	
	public Boolean getDone() {
		return done;
	}
	
	public void setDone(Boolean done) {
		this.done = done;
	}
	
	public String getText() {
		return text;
	}
	
	public void setText(String text) {
		this.text = text;
	}
	
	public long getDate() {
		return date;
	}
	
	public void setDate(long date) {
		this.date = date;
	}
}
