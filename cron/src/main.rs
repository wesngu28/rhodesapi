use dotenvy::dotenv;

fn main() {
    dotenv().ok();
    
    let response = match minreq::get("https://rhodesapi.up.railway.app/api/admin")
        .with_header("Authorization", std::env::var("authorization").unwrap())
        .send() {
            Ok(response)=> response,
            Err(e) => {
                println!("Error with the request: {}", e);
                return;
            }
        };

    println!("{:?}", response.as_str());
}