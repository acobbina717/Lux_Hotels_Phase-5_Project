# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Hotel.create!(
  name:"Loews Regency New York Hotel",
  star_rating: 5.0,
  location: '540 Park Avenue, New York, NY 10065, USA',
  rate: 499,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/30000/25600/25559/008be013_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Central Park South",
)


Hotel.create!(
  name:"The Dominick",
  star_rating: 5.0,
  location: '246 Spring Street, New York, NY 10013, USA',
  rate: 495,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/22000000/21790000/21783100/21783007/0e3015e3_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Hudson Square"
)


Hotel.create!(
  name:"JW Marriott Essex House New York",
  star_rating: 4.5,
  location: '160 Central Park S, New York, NY 10019, USA',
  rate: 449,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/540000/534200/534143/568e7aa5_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Central Park South"
)

Hotel.create!(
  name:"The Garden City Hotel",
  star_rating: 4.0,
  location: '45 7th St, Garden City, NY 11530, USA',
  rate: 260,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/20000/17800/17703/2ea4b506_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Garden City"
)

Hotel.create!(
  name:"Viana Hotel and Spa, Trademark Collection by Wyndham",
  star_rating: 4.0,
  location: '3998 Brush Hollow Rd, Westbury, NY 11590, USA',
  rate: 161,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/20000/17800/17703/2ea4b506_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Westbury"
)

Hotel.create!(
  name:"Curtiss Hotel, Ascend Hotel Collection",
  star_rating: 5.0,
  location: '210 Franklin St, Buffalo, NY 14202, USA',
  rate: 229,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/18000000/17040000/17038300/17038248/65405b68_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Downtown Buffalo"
)

Hotel.create!(
  name:"del Lago Resort & Casino",
  star_rating: 4.0,
  location: '1133 Route 414, Waterloo, NY 13165, USA',
  rate: 139,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/19000000/18260000/18258400/18258309/5706a01d_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Waterloo"
)

Hotel.create!(
  name:"Hotel Saranac Curio Collection By Hilton",
  star_rating: 4.0,
  location: '100 Main St, Saranac Lake, NY 12983, USA',
  rate: 281,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/17000000/16820000/16817200/16817106/260f0e16_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Saranac Lake"
)

Hotel.create!(
  name:"The Mansion On Delaware Ave",
  star_rating: 4.0,
  location: '414 Delaware Ave, Buffalo, NY 14202, USA',
  rate: 199,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/700000/692700/692610/aa8457e4_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Allentown"
)

Hotel.create!(
  name:"Gideon Putnam Resort And Spa",
  star_rating: 4.0,
  location: '24 Gideon Putnam Rd, Saratoga Springs, NY 12866, USA',
  rate: 225,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/410000/408900/408850/d4bcf13d_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Saratoga Springs"
)

Hotel.create!(
  name:"The Del Monte Lodge Renaissance Rochester Hotel & Spa",
  star_rating: 4.0,
  location: '41 N Main St, Pittsford, NY 14534, USA',
  rate: 221,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/410000/408900/408850/d4bcf13d_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Pittsford"
)

Hotel.create!(
  name:"The Strathallan Rochester Hotel & Spa- A DoubleTree by Hilton",
  star_rating: 4.0,
  location: '550 East Ave, Rochester, NY 14607, USA',
  rate: 160,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/30000/24100/24098/af6e44cd_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "East Avenue"
)

Hotel.create!(
  name:"High Peaks Resort",
  star_rating: 4.0,
  location: '2384 Saranac Ave, Lake Placid, NY 12946, USA',
  rate: 199,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/3000000/2170000/2163100/2163041/19c1f86b_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Lake Placid"
)

Hotel.create!(
  name:"Woodcliff Hotel and Spa",
  star_rating: 4.0,
  location: '199 Woodcliff Dr, Fairport, NY 14450, USA',
  rate: 170,
  desktop_thumbnail: "https://exp.cdn-hotels.com/hotels/1000000/20000/18500/18460/5065cbf0_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
  neighbourhood: "Fairport"
)


5.times do
  User.create!(
  username: "#{rand(60..70)}test_user#{rand(60..70)}",
  email: "#{rand(20..40)}test#{rand(1..7)}@gmail.com",
  password: "Password123!",
  )
end

10.times do

  Review.create!(
    user_id: User.ids.sample,
    hotel_id: Hotel.ids.sample,
    rating: rand(1..5),
    review: "This is a review"
  )
end




puts "Done seeding users"
