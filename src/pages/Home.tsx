import { Card, Col, Container, Row, Tab, Tabs } from 'solid-bootstrap';
import type { Component } from 'solid-js';
import Settings from '../data/Settings';
import Ambiguate from '../components/Ambiguate';

const Home: Component<{settings: Settings}> = (props) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 style={{"border-bottom": "1px solid black"}}>Tutorial</h1>
					<p>
						Welcome to my hunting set knowledge tool! I'm going to use this page to explain how to use
						this tool as best as I can as well as some strategies for using it mid-run effectively.
						I'll try to break this down as best as I can but hopefully most of this tool should be
						relatively intuitive to use with some practice as making set hunting as easy and accessible as possible
						for everyone is the goal of this project. To that end, I've also designed this webpage to be responsive
						to any screen size. So you should not need to worry about how big your monitor is or what resolution
						you are using. Likewise, if you have a phone or tablet you can use instead of a second monitor, that should also
						work as well. Although it might be more difficult to use somewhat, it should still be possible and this accessibility
						is the overall goal. I know there's a lot below to read and go over. But as with using any hunting sheet, learning and
						using this tool is a skill that will take a bit of time and practice. I encourage you to try out learning this tool
						along with any of the other hunting sheets available and seeing what works best for you!
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card
						border={props.settings.dark() ? 'black' : undefined}
						class={props.settings.dark() ? 'bg-card' : undefined}
						text={props.settings.dark() ? "white" : "dark"}
					>
						<Card.Body>
							<Tabs defaultActiveKey="settings" class="mb-3">
								<Tab tabClass={props.settings.dark() ? 'nav-link-dark' : 'text-dark'} eventKey="settings" title="Settings">
									<p>
										First, let's talk about the settings. You can find the settings on the top right of the page.
										All settings will be stored in your browser's storage so you should not need to worry about
										having to configure them every time you open this page.
									</p>
									<ul>
										<li>
											<strong>Dark Theme</strong>
											<ul>
												<li>Enables the site's Dark Theme which I've been told is something a lot of people like!</li>
											</ul>
										</li>
										<li>
											<strong>Uppercase All Words</strong>
											<ul>
												<li>When this is enabled, every word in a hint will begin with an uppercase letter.</li>
												<li>Off Example: "A place you can't jump"</li>
												<li>On Example: "A Place You Can't Jump"</li>
											</ul>
										</li>
										<li>
											<strong>Split Up Big Sets</strong>
											<ul>
												<li>
													When this is enabled, sets that have a lot of third piece options will be split up into multiple rows.
													Therefore, you will see a 2nd piece hint show up more than once on the left side of a set.
												</li>
												<li>
													Off Example: <br />
													A Star Between Three Arches -&gt; Watching Moon (Top) | Watching Stars (Top) | Center Square Shadow
												</li>
												<li>
													On Example: <br />
													A Star Between Three Arches -&gt; Watching Moon (Top) | Watching Stars (Top) <br />
													A Star Between Three Arches -&gt; Center Square Shadow
												</li>
												<li>
													In the on example, you can see how this is really 3 piece 3 options for 1 piece 2 of "A Star Between Three Arches"
													however it is split into 2 rows to make it easier to read. This is purely preference based and I personally don't use it.
												</li>
											</ul>
										</li>
										<li>
											<strong>Disable Confirmed Sets Section</strong>
											<ul>
												<li>
													Currently only Meteor Herd uses the confirmed sets display feature.
													In Meteor Herd you will notice that some P1 Cards have a big "Confirms" section at the top.
													This means that if you spot the P3 on the right, then the P2 on the left is confirmed.
												</li>
												<li>
													For example, "Shortcut Rocket (Left)" has "Floating In Front of Three Tanks" is confirmed by
													"Under a Star" which means that if you do a three tanks check and it's there, you will know that
													your P2 must be "Under a Star."
												</li>
												<li>
													This setting disables that section.
												</li>
											</ul>
										</li>
									</ul>
								</Tab>
								<Tab tabClass={props.settings.dark() ? 'nav-link-dark' : 'text-dark'} eventKey="search" title="Search">
									<p>
										Next to the Settings, you will find the primary feature for finding sets: the search bar.
										The search bar in this tool is designed to find your P1 hint as quickly as possible.
										To that end, the search works by filtering by words contained in the hint and search by the starting characters
										of a word. That is to say, if a hint were to be something like "Antidisestablishmentarianism"
										(A really long word for the sake of the example!) you would not need to type out the entire word to find it. You would simply
										start typing out the first few characters like "a" or "an" or "ant" or "anti" and it will start filtering out any P1
										that does not have a word in it which begins with those letters you typed.
									</p>
									<p>
										To further clarify how the search works, let's say you have a hint like "It's About To Fall Off"
										you don't need to search for the words in order. You can type something like "fall about to"
										and it will filter out all of the other sets. Also, as established previously, you also don't need to
										type out the whole words, so this could be further simplified to "fa ab t" and it will filter out every other P1.
										In fact, the last "t" is not even necessary to get to "It's About to Fall Off" specifically. Simply "fa ab" will suffice.
									</p>
									<p>
										Basically the key thing is to split up words with spaces in the search bar as well to search for each word in the hint.
										The order of the words doesn't actually matter in the search bar as long as that word is in the hint.
										Furthermore, if a word is repeated in one hint but not another, entering that word twice will get you only the P1
										which contains the word twice.
									</p>
									<p>
										A good example of this is in Meteor Herd. A lot of P1s have the word "Container" in the hint. However, only 2 have
										the word "Container" twice. So if you type "con con" you will get only "A Container Within A Container" and
										"Inside A Container Which Is Behind A Container" but not other P1s like "In The Floating Containers".
									</p>
									<p>
										The main skill you want to develop while using this tool is coming up with the most efficient search terms that use the least
										amount of characters to get the hint you are looking for while playing the game. Luckily Meteor Herd has plenty of down time
										the require little inputs while gliding or falling from a spring/rocket where typing is easy.
									</p>
								</Tab>
								<Tab tabClass={props.settings.dark() ? 'nav-link-dark' : 'text-dark'} eventKey="codes" title="Codes">
									<p>
										You will notice that almost all of the pages have a "Codes" dropdown that will appear in the navbar when you navigate
										to that page. These dropdowns will open up a section that contains all of the codes that you can use for that specific page
										instead of search terms. These codes are designed to make finding certain P1s that are hard to craft efficient search terms
										more easily, and not as yet another thing you need to memorize for tons of P1s. For that reason each stage has only a handful
										of codes which, again, are only meant to simplify finding those hard to search for pieces.
									</p>
									<p>
										Meteor Herd is again a great example for the intention of the codes feature. Meteor Herd in particular has 4 different
										"The Ark's Huge Storage Area" P1s. So instead of typing some search term for ark's huge, you can simply type "a1" and you will
										get the Close Container Ark's Huge.
									</p>
								</Tab>
								<Tab tabClass={props.settings.dark() ? 'nav-link-dark' : 'text-dark'} eventKey="disambiguations" title="Disambiguations">
									<p>
										Currently, a feature unique to Pumpkin Hill are the Disambiguation icons that appear in some sets as shown: <Ambiguate floatRight={false} />
									</p>
									<p>
										When you see a set with this icon, it means that your P3 or P3 options are not confirmed but rather help you disambiguate
										ambiguous pieces. For example, in Pumpkin Hill (not NG+) "Three Brothers' Tombstone" has "Horn (P)" for the P3 of "Pumpkin Family."
										This does not mean that if you get Pumpkin Family, then your P3 will be Horn (P). It means that if you get Pumpkin Family,
										THEN get "A Place Where You Can Hear The Horn" you will know that your P3 is the Pumpkin Horn piece and not the Church.
									</p>
									<p>
										Another thing to note is that some sets will have a disambiguation icon at the top of the card with no P2 listed.
										What this means is that if your P2 is not shown at all, and then you get one of the ambiguous pieces shown at the top, then
										you can use this as your disambiguation for any P2 not shown.
									</p>
									<p>
										Finally, you may find some P2s that have no P3 like with "Tells Time" in either NG or NG+. This is meant to tell you
										that this Three Brothers' Tombstone is in GT so you don't need to worry about if it's a Church one.
									</p>
								</Tab>
								<Tab tabClass={props.settings.dark() ? 'nav-link-dark' : 'text-dark'} eventKey="colors" title="Colors">
									<p>
										You will notice that sets and pieces have colors associated with them in Death Chamber.
										I think these colors should be self explanatory, but either way:
									</p>
									<ul>
										<li>Red: A red room piece, or so close to red room in machine's path that it's not worth using a different color</li>
										<li>Blue: A blue room piece, or blue secret piece.</li>
										<li>Green: A green room piece, or green secret.</li>
										<li>Purple: Red-Blue Machine's path, or red-blue secret</li>
										<li>Brown: Kind of unintuitive, but red + green = brown. Therefore, red-green machine's path.</li>
										<li>Black: A core piece. (White if you are on Dark Theme)</li>
									</ul>
								</Tab>
								<Tab tabClass={props.settings.dark() ? 'nav-link-dark' : 'text-dark'} eventKey="dc" title="Death Chamber">
									<p>
										Death Chamber has another unique quirk to it that is not present in the other stages.
										This is that sometimes, you will spawn with Bugs on Patrol or Roasted Keys.
										These usually lead to great sets, and if you get bugs or roasted keys, despite neither being a P1,
										you should search for bugs/roasted keys instead of your P1 and you will find sets specific to those pieces.
										In those sets, your P1 will be on the left instead of your P2 as is the case with every othere set.
									</p>
								</Tab>
								<Tab tabClass={props.settings.dark() ? 'nav-link-dark' : 'text-dark'} eventKey="tips" title="Tips and Tricks">
									<p>
										Finally, some tips that I've acquired for using this tool efficiently while playing the game.
									</p>
									<p>
										First and foremost, I truly believe that for Pumpkin Hill and Death Chamber in particular assuming you are
										playing in NG story mode and not x20s or centis or NG+, this tool is the most powerful. This is because both stages have upgrades
										that you will need to get, and these upgrades are not timed. That means that at the start of Pumpkin Hill or Death Chamber, you should
										immediately get your hint, and THEN get your upgrade. While you are in the upgrade, don't immediately leave the upgrade cutscene.
										This is the perfect little untimed break to type out your P1 hint in the search bar before continuing.
									</p>
									<p>
										While Meteor Herd does have an upgrade, it's obviously not one we ever get in a story run. However, Meteor Herd also
										happens to have the most typing opportunities out of any stage, even Pumpkin Hill in my opinion, and here's what I do:
									</p>
									<ol>
										<li>Your opening movement regardless of category should be the same as usual.</li>
										<li>
											After you get your hint you will decide whether or not you are gliding to the spring to take the shortcut rocket
											or diving down to run on the ground to your P1.
											<ul>
												<li>
													If you are gliding to the spring, I've found that the BEST time to type your P1 is during the time
													you spend falling after you hit the spring, and up until you land on the rocket platform.
													<ul>
														<li>
															You also have time after touching the rocket to further refine your search if need be.
														</li>
													</ul>
												</li>
												<li>
													If you are instead running down to a bottom P1, then in basically all cases you have plenty of time
													to type while you are running which only requires you to use one hand to hold a direction on your joystick.
													<ul>
														<li>
															In the case of Zero Point Five, I've also made searching for this piece easy by just typing "0" instead of
															the word "Zero" but either way works.
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											After you get your P1, you will generally get your P2 hint and then look for it on this tool to decide where to go next.
											<ul>
												<li>
													In the case of a mid P1, you will almost always be getting the hint on the platform next to the Artificial Chaos.
													In this case, I recommend taking the spring to the rocket platform because even if you don't need to go in that direction
													for your P2, this spring time gives you time to find your P2 on this tool and figure out what your P3 is
													so that you can decide what to do next.
												</li>
												<li>
													In the case of a bottom P1, you should have plenty of time while climbing to the rocket to find your P2.
												</li>
												<li>
													Finally, in the case of a top P1 which should generally only be something like Dangerous Liquid (Top)
													you should have plenty of time to look for your P2 after grabbing the hint on the Under a Star platform
													and dropping down.
												</li>
											</ul>
										</li>
										<li>
											Keep in mind that all P3 possibilities are listed in the order which you should check for them if there are more than one.
										</li>
										<li>
											In the case of a reset P1 for Meteor Herd specifically during a story run, I genuinely believe
											it's worth exiting out once to stay in 1024 rather than just restart. However this will be
											up to your preference and dependent on how your run is going up to Meteor Herd.
										</li>
									</ol>
								</Tab>
							</Tabs>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1 class="mt-4" style={{"border-bottom": "1px solid black"}}>
						Suggesting Changes
					</h1>
					<p>
						Finally, if you have suggestions for improving this tool's usage, or you'd like to contribute hunting knowledge feel free
						to open an issue on <a href="https://github.com/QueenSuzie/sa2-hunting-helper/issues" target="_blank">my github</a> with
						your suggestion(s) and I'll try to respond as soon as I can. With that said, good luck with your runs, and I hope this tool
						helps you achieve your goals!
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
