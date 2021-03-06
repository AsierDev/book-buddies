import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import Footer from './../Footer/Footer'
import booksBuddiesApi from './../../api/bookBuddiesApi'
import NavBar from './../NavBar/NavBar'
import './bookPreview.css'
import swal from 'sweetalert2'
import Loader from './../Loader/Loader'


class BookDetails extends Component {

	constructor(props) {
		super(props)

		this.state = {
			results: undefined,
			rating: undefined,
			comment: undefined,
			modal: false,
			userFavorites: [],
			userWished: [],
			userComments: [],
			
		}
	}

	handleRating = value => {
		this.setState({
			rating: value
		})
	}

	handleComment = text => {
		this.setState({
			comment: text
		})
	}

	submitReview = () => {

		const userId = sessionStorage.getItem("userId")
		const bookId = this.props.match.params.id
		const vote = this.state.rating
		const comment = this.state.comment
		const bookTitle = this.state.results.title


		booksBuddiesApi.addReview(bookId, userId, vote, comment, bookTitle)
			.then(() => {

				this.retrieveBook(this.props.match.params.id)
				this.retrieveUser()

			})
			.then(
				this.handleModal()

			)
	}

	componentWillMount() {
		this.retrieveBook(this.props.match.params.id)
		this.retrieveUser()

	}

	retrieveUser = () => {

		const userId = sessionStorage.getItem("userId")

		let favorites = []
		let wished = []
		let comments = []

		booksBuddiesApi.retrieveUser(userId)
			.then(_user => {


				_user.data.data.favorites.map(fav => {
					return favorites.push(fav.id)
				})

				_user.data.data.wishlist.map(wish => {
					return wished.push(wish.id)
				})

				_user.data.data.reviews.map(comment => {
					return comments.push(comment.id)
				})
			}

			)

			.then(() =>

				this.setState({
					userFavorites: favorites,
					userWished: wished,
					userComments: comments
				})
			)

	}


	retrieveBook = id => {

		if (id)
			booksBuddiesApi.retrieveBook(id)
				.then(_id =>
					this.setState({
						results: _id.data.data,
						
					})
				)
	}

	handleModal = (e) => {

		const bookId = this.props.match.params.id

		if (this.state.userComments.includes(bookId)) {

			swal({
				type: 'error',
				title: 'Ya has comentando este libro',
				showConfirmButton: true,
				timer: 1500
			})

		} else {

		this.setState({
			modal: !this.state.modal,
		})
	}

	}

	sendToList = (list) => {

		const userId = sessionStorage.getItem("userId")
		const bookId = this.props.match.params.id
		const bookTitle = this.state.results.title


		if ((list === "favoritos" && this.state.userFavorites.includes(bookId)) || (list === "wishlist" && this.state.userWished.includes(bookId))) {
			swal({
				type: 'error',
				title: 'Ya tienes este libro en la lista',
				showConfirmButton: true,
				timer: 1500
			})
		} else {

			booksBuddiesApi.addBookToList(bookId, userId, list, bookTitle)
				.then(() => this.retrieveUser())
		}

	}

	retrieveWriter(name) {
		const author = name.toString()

		this.props.history.push(`/results/${author}`)

	}



	render() {

		

		const { results, userFavorites, userWished, userComments } = this.state

		return (
			results ?
				<div>
					<section className="hero is-dark">
						<NavBar />
						<div className="hero-body book-header">
							<div className="container has-text-centered">
								<h1 className="title">
									{results.title}
								</h1>
								<h2 className="subtitle">
									{results.authors.length > 1 ?
										`${results.authors[0]} & ${results.authors[1]}` : results.authors[0]
									}
								</h2>
							</div>
						</div>
					</section>


					<main className="container ">
						<div className="box main-book">
							<section className="columns is-centered">
								<div className="column is-one-quarter">
									<figure className="profilePic image">
										<img src={results.thumbnail} alt="Book cover" />
									</figure>
								</div>
								<div className="column is-half">
									<div className="content details">
										<div className="basic-details">
											<h2>{results.title}</h2>
											<h5 className="is-italic">
												<a
													className="has-text-grey-dark"
													onClick={e => {
														e.preventDefault()
														this.retrieveWriter(results.authors)

													}}
												>
													<em> {results.authors.length > 1 ? `${results.authors[0]} & ${results.authors[1]}` : results.authors}</em>
												</a>
											</h5>
											<br />
											<p>
												<span>ISBN: </span> {results.industryIdentifiers[0].identifier}
												<br />
												<span>Páginas:</span> {results.pageCount}
												<br />
												<span>Fecha de publicacion:</span> {results.publishedDate}
												<br />
												<br />
												<span className="tag is-link">{results.categories[0]}</span>
											</p>
										</div>
									</div>
								</div>
								<div className="is-one-quarter">
									<div className="details">
										<div className="has-text-centered">

											<p className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">{results.avRate ? results.avRate : "Sin votos"}</p>

											<p>Puntuación Media</p>
										</div>

										<br />
										<div>

											<div className="has-text-centered">


												{
													userFavorites.includes(results.id) ?
														<a
															onClick={e => {
																e.preventDefault()
																this.sendToList('favoritos')
															}}
															className="button is-danger">
															Añadido a Favoritos
														</a>
														:
														<a
															onClick={e => {
																e.preventDefault()
																this.sendToList('favoritos')
															}}
															className="button is-primary is-outlined">
															Añadir a Favoritos
													 </a>

												}


											</div>

											<br />

											<div className="has-text-centered">

												{
													userWished.includes(results.id) ?
														<a
															onClick={e => {
																e.preventDefault()
																this.sendToList('favoritos')
															}}
															className="button is-danger">
															Añadido en la Wishlist
														</a>
														:
														<a
															onClick={e => {
																e.preventDefault()
																this.sendToList('wishlist')
															}}
															className="button is-primary is-outlined"
														>Añadir a Wishlist
                                                		</a>
												}

											</div>

											<br />

											<div className="has-text-centered">

												{
													userComments.includes(results.id) ?
														<a
															data-target="modal"
															onClick={e => {
																e.preventDefault()
																this.handleModal()
															}}
															className="button is-danger "
														> Ya comentado
                                                		</a>
														:
														<a
															data-target="modal"
															onClick={e => {
																e.preventDefault()
																this.handleModal()
															}}
															className="button is-primary is-outlined"
														>Añadir Comentario
                                                		</a>
												}

											</div>

										</div>
									</div>
								</div>
							</section>



							<section className="box">
								<section className="hero is-dark">
									<div className="hero-body comentarios">
										<div className="container">
											<h2 className="subtitle">
												Sipnosis de {results.title}
											</h2>
										</div>
									</div>
								</section>
								<section className="message is-dark">
									<div className="message-body">
										<p> {results.description ? results.description : "Este libro no cuenta con una descripción todavia"}</p>
									</div>
								</section>
							</section>



							<section>
								<article className="hero is-primary">
									<div className="hero-body comentarios">
										<div className="container ">
											<h2 className="subtitle">
												Comentarios
                                            </h2>
										</div>
									</div>
								</article>
								<article className="box content">

									{results.reviews && results.reviews.length ?

										results.reviews.map(review =>

											<div className="content-body" key={review._id}>

												{review.comment ?

													<div className="box">
														<p className="has-text-grey-dark is-italic">
															{review.comment}
														</p>
														<p className="has-text-grey is-size-7 has-text-weight-semibold is-capitalized">
															{review.user.username}
														</p>
													</div>
													: null
												}
											</div>
										)
										:
										"Este libro no cuenta con reseñas todavia"
									}
								</article>
							</section>

						</div>

						{this.state.modal ?
							<div className="modal is-active">
								<div className="modal-background" />
								<div className="modal-card">

									<header className="modal-card-head">
										<p className="modal-card-title">Añade tu voto y comentario </p>

									</header>

									<form
										name="opinion"
										onSubmit={e => {
											e.preventDefault()
											this.submitReview()
										}}
									>
										<div className="modal-card-body">

											<article>
												<div className="box rating">

													<div className="field opinion-scale">

														<ul>
															<li>
																<input type="radio" id="opinion-1" name="opinion-scale"
																	defaultValue={1} onChange={e => { this.handleRating(1) }}
																/>
																<label className="label is-large" htmlFor="opinion-1">1</label>
															</li>
															<li>
																<input type="radio" id="opinion-2" name="opinion-scale"
																	defaultValue={2} onChange={e => { this.handleRating(2) }}
																/>
																<label className="label is-large" htmlFor="opinion-2">2</label>
															</li>
															<li>
																<input type="radio" id="opinion-3" name="opinion-scale"
																	defaultValue={3} onChange={e => { this.handleRating(3) }}
																/>
																<label className="label is-large" htmlFor="opinion-3">3</label>
															</li>
															<li>
																<input type="radio" id="opinion-4" name="opinion-scale"
																	defaultValue={4} onChange={e => { this.handleRating(4) }}
																/>
																<label className="label is-large" htmlFor="opinion-4">4</label>
															</li>
															<li>
																<input type="radio" id="opinion-5" name="opinion-scale"
																	defaultValue={5} onChange={e => { this.handleRating(5) }}
																/>
																<label className="label is-large" htmlFor="opinion-5">5</label>
															</li>
															<li>
																<input type="radio" id="opinion-6" name="opinion-scale"
																	defaultValue={6} onChange={e => { this.handleRating(6) }}
																/>
																<label className="label is-large" htmlFor="opinion-6">6</label>
															</li>
															<li>
																<input type="radio" id="opinion-7" name="opinion-scale"
																	defaultValue={7} onChange={e => { this.handleRating(7) }}
																/>
																<label className="label is-large" htmlFor="opinion-7">7</label>
															</li>
															<li>
																<input type="radio" id="opinion-8" name="opinion-scale"
																	defaultValue={8} onChange={e => { this.handleRating(8) }}
																/>
																<label className="label is-large" htmlFor="opinion-8">8</label>
															</li>
															<li>
																<input type="radio" id="opinion-9" name="opinion-scale"
																	defaultValue={9} onChange={e => { this.handleRating(9) }}
																/>
																<label className="label is-large" htmlFor="opinion-9">9</label>
															</li>
															<li>
																<input type="radio" id="opinion-10" name="opinion-scale"
																	defaultValue={10} onChange={e => { this.handleRating(10) }}
																/>
																<label className="label is-large" htmlFor="opinion-10">10</label>
															</li>
														</ul>
													</div>

													<div className="media">

														<div className="media-content">
															<div className="field">
																<p className="control">
																	<textarea required className="textarea" placeholder="Add a comment..." defaultValue={""} onChange={e => { this.handleComment(e.target.value) }} />
																</p>
															</div>

														</div>
													</div>
												</div>
											</article>
										</div>

										<footer className="modal-card-foot">
											<button className="button is-success">Enviar</button>

											<button
												onClick={e => {
													e.preventDefault()
													this.handleModal()
												}}
												className="button"
											>Cancel</button>
										</footer>

									</form>

								</div>
							</div>
							:
							 null }

					</main>

					<Footer />
				</div>



				: <Loader />


		)




	}
}

export default withRouter(BookDetails)