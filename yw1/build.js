
let tableData = `
			<td>
				<table cellpadding="10px">
					<tr>
						<th>
							요괴 이름 / 동료 횟수
						</th>
						<th class="advanced" hidden>
							difficulty Id
						</th>
					</tr>
					<tr>
						<td align="center">
							<input id="yk_name_%I" placeholder="요괴 이름" list="yks" oninput="calculate(true, true)"  />
							<br />
							<input id="yk_count_%I" type="number" placeholder="동료 횟수" oninput="calculate(true)" />
						</td>
						<td class="advanced" hidden>
							<input id="bef_id_%I" type="number" placeholder="Difficulty" oninput="calculate()" />
							<br />
							<input id="calc_bef_id_%I" type="button" value="Difficulty 계산" onclick="calcDiff(%I)" />
						</td>
					</tr>
				</table>
							<input id="food_%I_0" type="radio" name="food_%I" onclick="calculate()" checked />
							<label for="food_%I_0">음식 없음</label>
							<br />
							<input id="food_%I_1" type="radio" name="food_%I" onclick="calculate()" />
							<label for="food_%I_1">음식 티어 1</label>
							<br />
							<input id="food_%I_2" type="radio" name="food_%I" onclick="calculate()" />
							<label for="food_%I_2">음식 티어 2</label>
							<br />
							<input id="food_%I_3" type="radio" name="food_%I" onclick="calculate()" />
							<label for="food_%I_3">음식 티어 3</label>
							<br />
							<input id="food_%I_4" type="radio" name="food_%I" onclick="calculate()" />
							<label for="food_%I_4">음식 티어 4</label>
							<br />
							<br />
							<input type="radio" id="fav_food_%I" name="food_type_%I" onclick="calculate()" />
							<label for="fav_food_%I">좋아하는 음식</label>
							<br />
							<input type="radio" id="normal_food_%I" name="food_type_%I" onclick="calculate()" checked />
							<label for="normal_food_%I">보통 음식</label>
							<br />
							<input type="radio" id="hat_food_%I" name="food_type_%I" onclick="calculate()" />
							<label for="hat_food_%I">싫어하는 음식</label>
			</td>
`;


let fullHTML = `
	<table>
		<tr>
			<th>요괴 1</th>
			<th>요괴 2</th>
			<th>요괴 3</th>
		</tr>
		<tr>
`;
for (let i = 1; i <= 3; i++) {
	fullHTML += tableData.replaceAll("%I", i);
}
fullHTML += `</tr>
	<tr>
		<td>
			<h3 id="result_1">부분 확률: 0.00%</h3>
		</td>
		<td>
			<h3 id="result_2">부분 확률: 0.00%</h3>
		</td>
		<td>
			<h3 id="result_3">부분 확률: 0.00%</h3>
		</td>
	</tr>
	</table>`;

document.getElementById("data").innerHTML = fullHTML;

let advanced = true;
function toggleAdvanced() {
	advanced = !advanced;

	for (let e of document.getElementsByClassName("advanced")) {
		e.hidden = !advanced;
	}
	let mode = advanced ? "less" : "more";
	document.getElementById("advBtn").innerHTML = "Show " + mode + " options";

}

toggleAdvanced();
