use chrono::{DateTime, Local};
use dotenvy::dotenv;

fn main() {
    dotenv().ok();
    
    let response = match minreq::get("https://rhodesapi.up.railway.app/api/admin")
        .with_header("Authorization", String::from(std::env::var("authorization").unwrap()))
        .send() {
            Ok(response)=> response,
            Err(e) => {
                println!("Error with the request: {}", e);
                return;
            }
        };

    if response.status_code == 200 {
        let local: DateTime<Local> = Local::now();
        println!("Admin cron processed {} with status code 200.", local);
        let json_response: serde_json::Value = match response.json() {
            Ok(json) => json,
            Err(e) => {
                println!("Error with the request: {}", e);
                return;
            }
        };
        
        let updated = json_response["updated"].as_i64().unwrap_or(0);
        let created = json_response["created"].as_i64().unwrap_or(0);
        
        println!("Updated: {}", updated);
        println!("Created: {}", created);
    } else {
        println!("Error: HTTP status code {}", response.status_code);
    }
}